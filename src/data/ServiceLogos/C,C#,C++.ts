import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const CCC: IBrand = {
  name: "C,C#,C++",
  categories: [BrandCategory.LANGUAGE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/C%2CC%23%2CC%2B%2B/All.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
