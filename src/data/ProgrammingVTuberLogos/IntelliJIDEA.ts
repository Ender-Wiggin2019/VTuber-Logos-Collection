import { Author, getCredit } from "../credits";

export const IntelliJIDEA: IBrand = {
  name: "IntelliJIDEA",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/IntelliJIDEA/IntellijLogo.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/IntelliJIDEA/intelliJShadow.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadow",
    },
  ],
};
