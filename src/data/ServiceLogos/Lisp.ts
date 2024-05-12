import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Lisp: IBrand = {
  name: "Lisp",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Lisp/Lisp.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
