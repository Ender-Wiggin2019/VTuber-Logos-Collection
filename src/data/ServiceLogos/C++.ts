import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const C1: IBrand = {
  name: "C++",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/C%2B%2B/C%2B%2B.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
