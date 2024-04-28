import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const GameMaker: IBrand = {
  name: "GameMaker",
  logos: [
    {
      url: "/FindViaTwitterLogos/GameMaker/GameMaker.png",
      credit: getCredit(Author.FurkanKarabudak),
      type: "default",
    },
  ],
};
