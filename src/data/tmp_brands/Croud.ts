import { Author, getCredit } from "../credits";

export const Croud: IBrand = {
  name: "Croud",
  logos: [
    {
      url: "/DownloadedLogos/Croud.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
