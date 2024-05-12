import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Go: IBrand = {
  name: "Go",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Go/Golang.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
