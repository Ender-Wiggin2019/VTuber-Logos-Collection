import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Java: IBrand = {
  name: "Java",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Java/Java.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
