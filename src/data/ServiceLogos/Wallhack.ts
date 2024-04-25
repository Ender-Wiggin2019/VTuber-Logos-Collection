import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Wallhack: IBrand = {
  name: "Wallhack",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Wallhack/WALLHACK.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
