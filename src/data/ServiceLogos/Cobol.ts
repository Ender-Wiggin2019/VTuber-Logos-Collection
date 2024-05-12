import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Cobol: IBrand = {
  name: "Cobol",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Cobol/Cobol.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
