import { Author, getCredit } from "../credits";

export const Haskell: IBrand = {
  name: "Haskell",
  logos: [
    {
      url: "/DownloadedLogos/Haskell.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
