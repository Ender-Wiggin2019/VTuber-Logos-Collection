import { Author, getCredit } from "../credits";

export const Vite: IBrand = {
  name: "Vite",
  logos: [
    {
      url: "/DownloadedLogos/Vite.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
