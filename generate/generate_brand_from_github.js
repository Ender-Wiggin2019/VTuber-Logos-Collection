const fs = require("fs").promises;
const path = require("path");
const ejs = require("ejs");
const fetch = require("node-fetch");

const targetDir = path.join(__dirname, "..", "src/data/generated_brands");
const template = path.join(__dirname, "templates/brand.ejs");
const indexTemplate = path.join(__dirname, "templates/index.ejs");

const GITHUB_API_URL = "https://api.github.com/repos/Aikoyori/ProgrammingVTuberLogos/contents/";
const AUTHOR = "Aikoyori";
const BRAND_COLLECTION_NAME = "ProgrammingVTuberLogos";

fs.mkdir(targetDir, { recursive: true }).catch(console.error);

/**
 *
 * @param {*} name the name directly read from GitHub API
 * @returns a valid class name
 */
function sanitizeClassName(name) {
  return name.replace(/^\./, "").replace(/[^\w$]/g, "_");
}

function determineLogoType(brand, fileName) {
  // use the brand name for mapping

  // fileName must be png due to the filter before
  let logoName = fileName.replace(".png", "").toLowerCase();

  let tag = logoName.replace(brand.toLowerCase(), "");

  console.log(tag);
  // if (name.includes("thick")) {
  //   return "thick";
  // } else if (name.includes("shadowedold")) {
  //   return "shadow old";
  // } else if (name.includes("shadow")) {
  //   return "shadow";
  // } else if (name.includes("old")) {
  //   return "old";
  // }
  return "default";
}

const validBrands = [];

/**
 *
 * @param {*} dirPath GitHub directory
 * @returns fetch result
 */
async function fetchGitHubDirectory(dirPath = "") {
  const response = await fetch(`${GITHUB_API_URL}${dirPath}`);
  return await response.json();
}

async function generateBrandFile(brand, brandDirUrl) {
  const files = await fetchGitHubDirectory(brandDirUrl);
  console.log(files);
  let logos = files
    .filter((file) => file.download_url && path.extname(file.name).toLowerCase() === ".png")
    .map((file) => ({
      url: file.download_url,
      author: AUTHOR,
      type: determineLogoType(brand, file.name),
    }));

  logos.sort((a, b) => {
    if (a.type === "default") return -1;
    if (b.type === "default") return 1;
    return 0;
  });

  const data = {
    logos: logos,
    className: brand,
    name: brand,
  };
  const templateContent = await fs.readFile(template, "utf8");
  const rendered = ejs.render(templateContent, data);

  // const options = await prettier.resolveConfig("./.prettierrc");
  // const formatted = prettier.format(rendered, { ...options, parser: "typescript" });

  // await fs.writeFile(path.join(targetDir, `${brand}.ts`), rendered);
  console.log(`${brand}.ts generated successfully.`);
}

async function generateFiles() {
  try {
    const brands = await fetchGitHubDirectory(); // 获取根目录内容
    console.log(brands);
    for (const brand of brands.filter((b) => b.type === "dir")) {
      // 筛选目录
      await generateBrandFile(brand.name, brand.path);
    }

    console.log(brands);

    const indexTemplateContent = await fs.readFile(indexTemplate, "utf8");

    const rendered = ejs.render(indexTemplateContent, { name: BRAND_COLLECTION_NAME, brands: validBrands });
    // const options = await prettier.resolveConfig("./.prettierrc");
    // const formatted = prettier.format(rendered, { ...options, parser: "typescript" });
    // await fs.writeFile(path.join(targetDir, "index.ts"), rendered);
    console.log(`index.ts generated successfully.`);
  } catch (err) {
    console.error("Error:", err);
  }
}

generateFiles();
