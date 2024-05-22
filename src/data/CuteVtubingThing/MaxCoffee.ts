import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const MaxCoffee: IBrand = {
  name: "MaxCoffee",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/MaxCoffee.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
