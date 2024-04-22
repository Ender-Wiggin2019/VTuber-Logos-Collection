const fs = require("fs").promises;
const path = require("path");
const ejs = require("ejs");
const prettier = require("prettier");

/**
 * Config
 */
const sourceDir = path.join(__dirname, "..", "public/DownloadedLogos");
const targetDir = path.join(__dirname, "..", "src/data/tmp_brands");
const template = path.join(__dirname, "templates/brand.ejs");
const indexTemplate = path.join(__dirname, "templates/index.ejs");

const DOWNLOAD_URL = "/DownloadedLogos/";
const AUTHOR = "SAWARATSUKI";
const BRAND_COLLECTION_NAME = "SAWARATSUKILogos";

/**
 * Script
 */
fs.mkdir(targetDir, { recursive: true }).catch(console.error);

function determineLogoType(fileName) {
  const name = fileName.toLowerCase();
  if (name.includes("thick")) {
    return "thick";
  } else if (name.includes("shadowedold")) {
    return "shadow old";
  } else if (name.includes("shadow")) {
    return "shadow";
  } else if (name.includes("old")) {
    return "old";
  }
  return "default";
}

const validBrands = [];
const validBrandClassNames = [];
async function generateBrandFile(brand) {
  brandName = brand.replace(/(\.jpg|\.png)$/, "");
  // const brandDir = path.join(sourceDir, brand);
  try {
    // const stat = await fs.stat(brandDir);
    // if (!stat.isDirectory()) {
    //     return;
    // }

    // if (brand[0] === '.') return;
    validBrands.push(brandName);

    // const files = await fs.readdir(brandDir);
    let logos = {
      url: path.join(DOWNLOAD_URL, brand),
      // url: `https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/${brand}/${file}`,
      author: AUTHOR,
      type: determineLogoType(brand), // 使用函数获取类型
    };

    // logos.sort((a, b) => {
    //     if (a.type === 'default') return -1; // 如果a是default，它应该排在前面
    //     if (b.type === 'default') return 1;  // 如果b是default，a应该排在后面
    //     return 0; // 如果都不是default，保持原来的顺序
    // });

    const className = brandName.replace(" ", "").replace(".", "");
    validBrandClassNames.push(className);
    const data = {
      logos: [logos],
      className: className,
      name: brandName,
    };
    const templateContent = await fs.readFile(template, "utf8");
    const rendered = ejs.render(templateContent, data);

    // const options = await prettier.resolveConfig("./.prettierrc");
    // const formatted = prettier.format(rendered, { ...options, parser: "typescript" });

    await fs.writeFile(path.join(targetDir, `${className}.ts`), rendered);
    console.log(`${className}.ts generated successfully.`);
  } catch (err) {
    console.error(`Error processing ${brandName}:`, err);
  }
}

async function generateFiles() {
  try {
    const brands = await fs.readdir(sourceDir);
    for (const brand of brands) {
      await generateBrandFile(brand);
    }
    console.log(brands);

    const indexTemplateContent = await fs.readFile(indexTemplate, "utf8");

    const rendered = ejs.render(indexTemplateContent, { name: BRAND_COLLECTION_NAME, brands: validBrandClassNames });
    // const options = await prettier.resolveConfig("./.prettierrc");
    // const formatted = prettier.format(rendered, { ...options, parser: "typescript" });
    await fs.writeFile(path.join(targetDir, "index.ts"), rendered);
    console.log(`index.ts generated successfully.`);
  } catch (err) {
    console.error("Error reading source directory:", err);
  }
}

generateFiles();
