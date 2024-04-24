const fs = require("fs").promises;
const path = require("path");
const ejs = require("ejs");
// Assuming prettier is installed and used; otherwise, the related code can be commented out
const prettier = require("prettier");
const setting = require("./config/setting.json");

console.log(setting);

const template = path.join(__dirname, "templates/brand.ejs");
const indexTemplate = path.join(__dirname, "templates/index.ejs");

/**
 * Fixes include:
 * - Passing necessary arguments to functions
 * - Moving variables into appropriate scope
 * - Adjusting async flow with await where needed
 */

function determineLogoType(brand, fileName) {
  let logoName = fileName.replace(".png", "").toLowerCase();
  logoName = logoName.replace("logo", "");

  let rawTag = logoName.replace(brand.toLowerCase(), "");

  const tagMap = new Map([
    ["thick", "thick"],
    ["svgbgshadows", "shadowed"],
    ["shadowedold", "shadow old"],
    ["old", "old"],
  ]);

  let res = rawTag;

  if (rawTag === "") res = "default";
  else {
    for (const [raw, tag] of tagMap.entries()) {
      if (rawTag.includes(raw)) {
        res = tag;
        break;
      }
    }
  }

  return res;
}

async function generateBrandFile(sourceDir, brand, targetDir, DOWNLOAD_URL, AUTHOR, validBrands, validBrandClassNames) {
  const brandDir = path.join(sourceDir, brand);
  try {
    const stat = await fs.stat(brandDir);
    if (!stat.isDirectory() || brand[0] === ".") {
      return;
    }

    const files = await fs.readdir(brandDir);
    const encodedFolderName = brand.replace(/,/g, "%2C").replace(/\#/g, "%23").replace(/\+/g, "%2B");
    // console.log(AUTHOR);
    let logos = files
      .filter((file) => path.extname(file).toLowerCase() === ".png")
      .map((file) => ({
        url: `${DOWNLOAD_URL}${encodedFolderName}/${file.replace(/,/g, "%2C").replace(/\#/g, "%23").replace(/\+/g, "%2B")}`,
        author: AUTHOR,
        type: determineLogoType(brand, file),
      }));

    logos.sort((a, b) => (a.type === "default" ? -1 : b.type === "default" ? 1 : 0));
    if (logos.length === 0) return;
    if (logos.length === 1) logos[0].type = "default";

    validBrands.push(brand);
    let className = convertToValidName(brand);

    // make sure each is unique
    if (!validBrandClassNames.includes(className)) {
      validBrandClassNames.push(className);
    } else {
      let count = 0;
      while (validBrandClassNames.includes(className + count)) {
        count++;
      }

      className = className + count;
      validBrandClassNames.push(className);
    }

    const data = {
      logos: logos,
      className: className,
      name: brand,
    };

    const templateContent = await fs.readFile(template, "utf8");
    const rendered = ejs.render(templateContent, data);

    await fs.writeFile(path.join(targetDir, `${brand}.ts`), rendered);
    console.log(`${brand}.ts generated successfully.`);
  } catch (err) {
    console.error(`Error processing ${brand}:`, err);
  }
}

async function generateFiles(sourceDir, targetDir, DOWNLOAD_URL, AUTHOR, BRAND_COLLECTION_NAME) {
  const validBrands = []; // brand name
  const validBrandClassNames = []; // class name
  try {
    const brands = await fs.readdir(sourceDir);
    for (const brand of brands) {
      await generateBrandFile(sourceDir, brand, targetDir, DOWNLOAD_URL, AUTHOR, validBrands, validBrandClassNames);
    }

    const indexTemplateContent = await fs.readFile(indexTemplate, "utf8");

    const renderedData = validBrandClassNames.map((brandClassName, index) => ({ brand: brandClassName, path: validBrands[index] }));
    const rendered = ejs.render(indexTemplateContent, { name: BRAND_COLLECTION_NAME, data: renderedData });

    await fs.writeFile(path.join(targetDir, "index.ts"), rendered);
    console.log(`index.ts generated successfully.`);
  } catch (err) {
    console.error("Error reading source directory:", err);
  }
}

function convertToValidName(s) {
  let validString = s.replace(/[^\w$]/g, "");

  if (validString.match(/^\d/)) {
    validString = "_" + validString;
  }

  return validString === "" ? "_default" : validString;
}

async function run() {
  for (const dataSrc of setting) {
    const sourceDir = path.join(__dirname, "..", `public/${dataSrc.githubRepoName}`);
    const targetDir = path.join(__dirname, "..", `src/data/${dataSrc.githubRepoName}`);

    const DOWNLOAD_URL = dataSrc.downloadUrl;
    const AUTHOR = dataSrc.author;
    const BRAND_COLLECTION_NAME = dataSrc.githubRepoName;

    await fs.mkdir(targetDir, { recursive: true });

    await generateFiles(sourceDir, targetDir, DOWNLOAD_URL, AUTHOR, BRAND_COLLECTION_NAME);
  }
}

run();
