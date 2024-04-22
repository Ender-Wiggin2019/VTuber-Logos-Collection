import { Author, getCredit } from "../credits";

export const Golang: IBrand = {
  name: "Golang",
  logos: [
    {
      url: "/DownloadedLogos/Golang.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
