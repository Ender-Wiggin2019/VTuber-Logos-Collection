import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Vim: IBrand = {
  name: "Vim",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Vim/VIM.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
