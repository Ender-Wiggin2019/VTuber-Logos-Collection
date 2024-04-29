import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Python: IBrand = {
  name: "Python",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Python/Python.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
