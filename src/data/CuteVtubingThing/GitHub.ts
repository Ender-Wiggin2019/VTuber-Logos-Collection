import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const GitHub: IBrand = {
  name: "GitHub",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/GitHub.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
