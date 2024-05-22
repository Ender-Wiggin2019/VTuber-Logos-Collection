import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const CircleK: IBrand = {
  name: "CircleK",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/CircleK.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
