import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const WarThunder: IBrand = {
  name: "WarThunder",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/WarThunder.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
