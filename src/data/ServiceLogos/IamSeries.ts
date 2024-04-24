import { Author, getCredit } from "../credits";

export const IamSeries: IBrand = {
  name: "IamSeries",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/IamSeries/IamProgrammer!.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/IamSeries/IamProgrammerEnglish.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "english",
    },
  ],
};
