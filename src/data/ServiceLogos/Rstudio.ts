import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";
export const Rstudio: IBrand = {
  name: "Rstudio",
  categories: [BrandCategory.IDE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Rstudio/RStudio.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
