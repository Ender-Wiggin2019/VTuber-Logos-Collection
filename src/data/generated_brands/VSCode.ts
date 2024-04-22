import { Author, getCredit } from "../credits";

export const VSCode: IBrand = {
  name: "VSCode",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/VSCode/VSCode.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/VSCode/VSCode-Thick.png",
      credit: getCredit(Author.Aikoyori),
      type: "thick",
    },
  ],
};
