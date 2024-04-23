import { Author, getCredit } from "../credits";

export const X: IBrand = {
  name: "X",
  logos: [
    {
      url: "/DownloadedLogos/X.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
