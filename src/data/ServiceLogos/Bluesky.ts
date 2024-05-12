import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Bluesky: IBrand = {
  name: "Bluesky",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Bluesky/Bluesky.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
