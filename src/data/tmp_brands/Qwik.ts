import { Author, getCredit } from "../credits";

export const Qwik: IBrand = {
  name: "Qwik",
  logos: [
    {
      url: "/DownloadedLogos/Qwik.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
