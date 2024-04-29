import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Html: IBrand = {
  name: "Html",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Html/HTML.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
