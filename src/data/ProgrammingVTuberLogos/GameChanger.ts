import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const GameChanger: IBrand = {
  name: "GameChanger",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/GameChanger/GameChangerLogo.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/GameChanger/GameChangerLogoShadowed.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadowed",
    },
  ],
};
