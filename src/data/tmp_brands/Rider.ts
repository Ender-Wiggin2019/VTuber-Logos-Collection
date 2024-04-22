import { Author, getCredit } from "../credits";

export const Rider: IBrand = {
  name: "Rider",
  logos: [
    {
      url: "/DownloadedLogos/Rider.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
