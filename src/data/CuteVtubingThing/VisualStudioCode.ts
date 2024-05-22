import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const VisualStudioCode: IBrand = {
  name: "VisualStudioCode",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/VisualStudioCode.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
