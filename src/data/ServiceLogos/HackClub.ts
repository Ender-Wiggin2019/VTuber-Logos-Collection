import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const HackClub: IBrand = {
  name: "HackClub",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/HackClub/HackClub.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
