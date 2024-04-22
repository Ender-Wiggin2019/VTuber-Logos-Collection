import { Author, getCredit } from "../credits";

export const COBOL: IBrand = {
  name: "COBOL",
  logos: [
    {
      url: "/DownloadedLogos/COBOL.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
