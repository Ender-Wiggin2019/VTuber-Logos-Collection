import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Julia: IBrand = {
  name: "Julia",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Julia/Julia.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
