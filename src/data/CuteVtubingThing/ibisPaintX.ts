import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const ibisPaintX: IBrand = {
  name: "ibisPaintX",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/ibisPaintX.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
