import { Author, getCredit } from "../credits";

export const Hono: IBrand = {
  name: "Hono",
  logos: [
    {
      url: "/DownloadedLogos/Hono.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
