const fs = require('fs').promises;
const path = require('path');
const ejs = require('ejs');
const prettier = require('prettier');

const sourceDir = path.join(__dirname, '..', 'public/ProgrammingVTuberLogos');
const targetDir = path.join(__dirname, '..', 'src/data/generated_brands');

fs.mkdir(targetDir, { recursive: true }).catch(console.error);

const template = path.join(__dirname, "templates/brand.ejs");
const indexTemplate = path.join(__dirname, "templates/index.ejs");

function determineLogoType(fileName) {
    const name = fileName.toLowerCase();
    if (name.includes('thick')) {
        return 'thick';
    } else if (name.includes('shadowedold')) {
        return 'shadow old';
    } else if (name.includes('shadow')) {
        return 'shadow';
    } else if (name.includes('old')) {
        return 'old';
    }
    return 'default';
}

const validBrands = [];
async function generateBrandFile(brand) {
    const brandDir = path.join(sourceDir, brand);
    try {
        const stat = await fs.stat(brandDir);
        if (!stat.isDirectory()) {
            return;
        }

        if (brand[0] === '.') return;
        validBrands.push(brand);

        const files = await fs.readdir(brandDir);
        let logos = files.filter(file => path.extname(file).toLowerCase() === '.png')
        .map(file => ({
            // url: path.join('/ProgrammingVTuberLogos/', brand, file),
            url: `https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/${brand}/${file}`,
            author: 'Aikoyori',
            type: determineLogoType(file) // 使用函数获取类型
        }));

        logos.sort((a, b) => {
            if (a.type === 'default') return -1; // 如果a是default，它应该排在前面
            if (b.type === 'default') return 1;  // 如果b是default，a应该排在后面
            return 0; // 如果都不是default，保持原来的顺序
        });


        const data = {
            logos: logos,
            className: brand,
            name: brand,
        };
        const templateContent = await fs.readFile(template, 'utf8');
        const rendered = ejs.render(templateContent, data);

        // const options = await prettier.resolveConfig("./.prettierrc");
        // const formatted = prettier.format(rendered, { ...options, parser: "typescript" });

        await fs.writeFile(path.join(targetDir, `${brand}.ts`), rendered);
        console.log(`${brand}.ts generated successfully.`);
    } catch (err) {
        console.error(`Error processing ${brand}:`, err);
    }
}


  async function generateFiles() {
    try {
      const brands = await fs.readdir(sourceDir);
      for (const brand of brands) {
        await generateBrandFile(brand);
      }
    console.log(brands);

    const indexTemplateContent = await fs.readFile(indexTemplate, 'utf8');

    const rendered = ejs.render(indexTemplateContent, {brands: validBrands});
    // const options = await prettier.resolveConfig("./.prettierrc");
    // const formatted = prettier.format(rendered, { ...options, parser: "typescript" });
    await fs.writeFile(path.join(targetDir, 'index.ts'), rendered);
    console.log(`index.ts generated successfully.`);

    } catch (err) {
      console.error('Error reading source directory:', err);
    }
  }


  generateFiles();