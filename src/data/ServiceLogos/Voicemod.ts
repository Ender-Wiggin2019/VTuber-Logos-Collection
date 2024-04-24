import { Author, getCredit } from "../credits";

export const Voicemod: IBrand = {
  name: "Voicemod",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Voicemod/Voicemod.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
