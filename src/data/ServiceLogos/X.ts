import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const X: IBrand = {
  name: "X",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/X/X.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
