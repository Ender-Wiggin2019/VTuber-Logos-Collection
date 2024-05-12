import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
export const Rstudio: IBrand = {
  name: "Rstudio",
  categories: [BrandCategory.IDE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Rstudio/RStudio.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
