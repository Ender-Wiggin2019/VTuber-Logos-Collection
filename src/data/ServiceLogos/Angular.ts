import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Angular: IBrand = {
  name: "Angular",
  categories: [BrandCategory.FRAMEWORK],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Angular/Angular.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Angular/Angular_Old.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "old",
    },
  ],
};
