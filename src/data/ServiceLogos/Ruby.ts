import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Ruby: IBrand = {
  name: "Ruby",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Ruby/Ruby.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
