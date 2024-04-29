import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const C0: IBrand = {
  name: "C#",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/C%23/C%23.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/C%23/C%23 Purple.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: " purple",
    },
  ],
};
