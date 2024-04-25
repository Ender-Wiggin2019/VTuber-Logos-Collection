import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Swift: IBrand = {
  name: "Swift",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Swift/Swift.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
