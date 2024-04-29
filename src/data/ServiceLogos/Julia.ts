import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const Julia: IBrand = {
  name: "Julia",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Julia/Julia.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
