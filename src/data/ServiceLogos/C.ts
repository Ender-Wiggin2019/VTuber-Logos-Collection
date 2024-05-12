import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const C: IBrand = {
  name: "C",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/C/C.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
