import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const FlipperZero: IBrand = {
  name: "FlipperZero",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/FlipperZero/FlipperZero.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
