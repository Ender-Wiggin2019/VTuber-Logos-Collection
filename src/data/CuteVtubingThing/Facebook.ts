import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const Facebook: IBrand = {
  name: "Facebook",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/Facebook.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
