import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const PornHub: IBrand = {
  name: "PornHub",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/PornHub.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
