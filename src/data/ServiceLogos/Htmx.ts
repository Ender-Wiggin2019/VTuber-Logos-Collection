import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Htmx: IBrand = {
  name: "Htmx",
  categories: [BrandCategory.FRAMEWORK],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Htmx/htmx.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
