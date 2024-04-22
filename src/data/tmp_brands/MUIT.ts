import { Author, getCredit } from "../credits";

export const MUIT: IBrand = {
  name: "MUIT",
  logos: [
    {
      url: "/DownloadedLogos/MUIT.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
