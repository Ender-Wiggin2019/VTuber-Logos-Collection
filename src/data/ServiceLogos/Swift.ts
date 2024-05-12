import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Swift: IBrand = {
  name: "Swift",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Swift/Swift.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
