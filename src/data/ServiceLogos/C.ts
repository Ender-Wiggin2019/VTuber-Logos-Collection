import { Author, getCredit } from "../credits";

export const C: IBrand = {
  name: "C",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/C/C.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
