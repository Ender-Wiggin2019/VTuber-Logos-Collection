import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const MacOS14: IBrand = {
  name: "MacOS14",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/MacOS14.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
