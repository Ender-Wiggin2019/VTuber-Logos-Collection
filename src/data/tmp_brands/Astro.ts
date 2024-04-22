import { Author, getCredit } from "../credits";

export const Astro: IBrand = {
  name: "Astro",
  logos: [
    {
      url: "/DownloadedLogos/Astro.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
