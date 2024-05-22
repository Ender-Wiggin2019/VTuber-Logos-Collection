import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const GraphicDesign: IBrand = {
  name: "GraphicDesign",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/GraphicDesign.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
