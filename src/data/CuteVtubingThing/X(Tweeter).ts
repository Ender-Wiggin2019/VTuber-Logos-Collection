import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const XTweeter: IBrand = {
  name: "X(Tweeter)",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/X(Tweeter).png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
