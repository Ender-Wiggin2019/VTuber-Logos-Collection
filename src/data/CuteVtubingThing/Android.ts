import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const Android: IBrand = {
  name: "Android",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/Android.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
