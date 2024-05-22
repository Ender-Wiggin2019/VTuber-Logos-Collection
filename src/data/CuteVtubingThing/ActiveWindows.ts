import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const ActiveWindows: IBrand = {
  name: "ActiveWindows",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/ActiveWindows.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
