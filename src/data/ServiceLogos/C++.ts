import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const C1: IBrand = {
  name: "C++",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/C%2B%2B/C%2B%2B.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
