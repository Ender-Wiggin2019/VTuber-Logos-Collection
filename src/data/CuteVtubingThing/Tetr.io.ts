import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const Tetrio: IBrand = {
  name: "Tetr.io",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/Tetr.io.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
