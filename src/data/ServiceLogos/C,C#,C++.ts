import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const CCC: IBrand = {
  name: "C,C#,C++",
  categories: [BrandCategory.LANGUAGE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/C%2CC%23%2CC%2B%2B/All.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
