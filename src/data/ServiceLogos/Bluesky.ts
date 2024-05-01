import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const Bluesky: IBrand = {
  name: "Bluesky",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Bluesky/Bluesky.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
