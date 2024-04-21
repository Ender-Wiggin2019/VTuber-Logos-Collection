const fs = require('fs').promises;
const path = require('path');
const ejs = require('ejs');
const prettier = require('prettier');

const sourceDir = path.join(__dirname, '..', 'public/ProgrammingVTuberLogos');
const targetDir = path.join(__dirname, '..', 'src/app/data/brands');

// 确保目标文件夹存在
fs.mkdir(targetDir, { recursive: true }).catch(console.error);

// 读取EJS模板
const template = path.join(__dirname, "templates/brand.ejs");

// fs.readdir(sourceDir, (err, brands) => {
//     if (err) {
//         console.error('Error reading source directory:', err);
//         return;
//     }

//     brands.forEach(brand => {

//         const brandDir = path.join(sourceDir, brand);
//         fs.readdir(brandDir, (err, files) => {
//             if (err) {
//                 console.error(`Error reading brand directory (${brand}):`, err);
//                 return;
//             }

//             const logos = files.filter(file => path.extname(file).toLowerCase() === '.png')
//                                .map(file => path.join('path/to/logos', brand, file)); // Adjust logo path as needed

//             const data = {
//                 logos: logos,
//                 className: brand,
//                 name: brand,
//             };

//             // 渲染EJS模板
//             const rendered = ejs.render(template, data);

//             // 使用Prettier格式化生成的代码
//             // prettier.resolveConfig("./.prettierrc").then(options => {
//             //     const formatted = prettier.format(rendered, { ...options, parser: "typescript" });

//             //     // 写入文件
//             //     fs.writeFileSync(path.join(targetDir, `${brand}.ts`), formatted);
//             //     console.log(`${brand}.ts generated successfully.`);
//             // });

//             fs.writeFileSync(path.join(targetDir, `${brand}.ts`), rendered);
//         });
//     });
// });


async function generateBrandFile(brand) {
    const brandDir = path.join(sourceDir, brand);
    try {
      const stat = await fs.stat(brandDir);
      if (!stat.isDirectory()) {
        return; // 如果不是目录，则跳过
      }

      const files = await fs.readdir(brandDir);
      const logos = files.filter(file => path.extname(file).toLowerCase() === '.png')
                         .map(file => path.join('path/to/logos', brand, file)); // 调整logos路径

                         const data = {
                            logos: logos,
                            className: brand,
                            name: brand,
                        };

      // 渲染EJS模板
      const rendered = ejs.render(template, data);

      // 使用Prettier格式化生成的代码
    //   const options = await prettier.resolveConfig("./.prettierrc");
    //   const formatted = prettier.format(rendered, { ...options, parser: "typescript" });

      // 写入文件
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
    } catch (err) {
      console.error('Error reading source directory:', err);
    }
  }

  generateFiles();