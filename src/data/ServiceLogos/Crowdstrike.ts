import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Crowdstrike: IBrand = {
  name: "Crowdstrike",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Crowdstrike/CroudStrike.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
