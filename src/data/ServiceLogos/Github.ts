import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Github: IBrand = {
  name: "Github",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Github/Github.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
