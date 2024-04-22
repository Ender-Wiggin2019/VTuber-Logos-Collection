import { Author, getCredit } from "../credits";

export const Photoshop: IBrand = {
  name: "Photoshop",
  logos: [
    {
      url: "/DownloadedLogos/Photoshop.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
