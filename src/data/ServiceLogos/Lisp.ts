import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const Lisp: IBrand = {
  name: "Lisp",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Lisp/Lisp.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
