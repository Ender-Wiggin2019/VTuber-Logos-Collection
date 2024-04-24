import { Author, getCredit } from "../credits";

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
