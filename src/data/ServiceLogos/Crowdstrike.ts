import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Crowdstrike: IBrand = {
  name: "Crowdstrike",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Crowdstrike/CroudStrike.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
