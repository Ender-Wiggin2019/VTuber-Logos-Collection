import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const React: IBrand = {
  name: "React",
  categories: [BrandCategory.FRAMEWORK],

  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/React/React.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
