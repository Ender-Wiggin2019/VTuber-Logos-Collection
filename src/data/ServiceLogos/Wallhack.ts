import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Wallhack: IBrand = {
  name: "Wallhack",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Wallhack/WALLHACK.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
