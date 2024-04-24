import { Author, getCredit } from "../credits";

export const Angular: IBrand = {
  name: "Angular",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Angular/Angular.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Angular/Angular_Old.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "old",
    },
  ],
};
