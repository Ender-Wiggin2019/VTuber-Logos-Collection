import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const Nhentainet: IBrand = {
  name: "Nhentai.net",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/Nhentai.net.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
