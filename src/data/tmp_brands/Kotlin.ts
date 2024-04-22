import { Author, getCredit } from "../credits";

export const Kotlin: IBrand = {
  name: "Kotlin",
  logos: [
    {
      url: "/DownloadedLogos/Kotlin.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
