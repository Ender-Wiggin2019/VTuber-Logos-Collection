import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Laravel: IBrand = {
  name: "Laravel",
  categories: [BrandCategory.FRAMEWORK],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Laravel/Laravel.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
