import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const NordVPN: IBrand = {
  name: "NordVPN",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/NordVPN.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
