import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Ruby: IBrand = {
  name: "Ruby",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Ruby/Ruby.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
