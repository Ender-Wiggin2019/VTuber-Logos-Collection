import { Author, getCredit } from "../credits";

export const Docker: IBrand = {
  name: "Docker",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Docker/DockerLogo.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Docker/DockerLogoShadowed.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadow",
    },
  ],
};
