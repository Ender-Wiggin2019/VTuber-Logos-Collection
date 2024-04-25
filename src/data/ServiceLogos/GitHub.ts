import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const GitHub: IBrand = {
  name: "Github",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/GitHub/GitHub.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
