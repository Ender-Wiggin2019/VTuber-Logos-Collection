import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const Chesscom: IBrand = {
  name: "Chess.com",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/Chess.com.png",
      credit: getCredit(Author.murimurikyu),
      type: "default",
    },
  ],
};
