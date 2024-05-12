import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Teamspeak: IBrand = {
  name: "Teamspeak",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Teamspeak/TeamSpeak.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
