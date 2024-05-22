import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const MonsterEnergy: IBrand = {
  name: "MonsterEnergy",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/MonsterEnergy.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
