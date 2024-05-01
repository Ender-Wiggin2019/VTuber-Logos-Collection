import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Docker: IBrand = {
  name: "Docker",
  categories: [BrandCategory.DEV_TOOLS],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Docker/DockerLogo.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Docker/DockerLogoShadowed.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadowed",
    },
  ],
};
