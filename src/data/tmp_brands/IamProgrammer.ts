import { Author, getCredit } from "../credits";

export const IamProgrammer: IBrand = {
  name: "I am Programmer",
  logos: [
    {
      url: "/DownloadedLogos/IamProgrammer!.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
    {
      url: "/DownloadedLogos/IamProgrammerEnglish.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "english",
    },
  ],
};
