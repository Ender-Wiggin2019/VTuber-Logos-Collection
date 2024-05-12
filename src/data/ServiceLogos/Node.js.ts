import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Nodejs: IBrand = {
  name: "Node.js",
  categories: [BrandCategory.FRAMEWORK],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Node.js/Node.js.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
