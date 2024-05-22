import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const Windows11: IBrand = {
  name: "Windows11",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/Windows11.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
