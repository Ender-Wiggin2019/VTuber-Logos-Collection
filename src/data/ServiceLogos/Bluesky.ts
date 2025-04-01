import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Bluesky: IBrand = {
  name: "Bluesky",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/Bluesky/BlueSky.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
