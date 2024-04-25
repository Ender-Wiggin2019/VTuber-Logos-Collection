import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const FlipperZero: IBrand = {
  name: "Flipper Zero",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Flipper Zero/Flipper Zero.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
