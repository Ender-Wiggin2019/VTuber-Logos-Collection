import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const ArmoredCore6: IBrand = {
  name: "ArmoredCore6",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/ArmoredCore6.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
