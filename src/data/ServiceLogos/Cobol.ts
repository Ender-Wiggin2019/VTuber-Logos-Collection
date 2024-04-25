import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Cobol: IBrand = {
  name: "Cobol",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Cobol/Cobol.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
