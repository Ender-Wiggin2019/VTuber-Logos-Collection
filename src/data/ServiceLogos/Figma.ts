import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Figma: IBrand = {
  name: "Figma",
  categories: [BrandCategory.DESIGN],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Figma/Figma.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
