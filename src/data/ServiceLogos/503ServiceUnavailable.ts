import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const _503ServiceUnavailable: IBrand = {
  name: "503 Service Unavailable",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/503ServiceUnavailable/ServiceUnavailable.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
