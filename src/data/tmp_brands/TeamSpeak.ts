import { Author, getCredit } from "../credits";

export const TeamSpeak: IBrand = {
  name: "TeamSpeak",
  logos: [
    {
      url: "/DownloadedLogos/TeamSpeak.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
