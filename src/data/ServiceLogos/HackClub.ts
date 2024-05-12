import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const HackClub: IBrand = {
  name: "HackClub",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/HackClub/HackClub.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
