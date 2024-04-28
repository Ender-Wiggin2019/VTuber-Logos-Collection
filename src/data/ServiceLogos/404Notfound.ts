import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const _404Notfound: IBrand = {
  name: "404Notfound",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/404Notfound/NotFound.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
