import { Author, getCredit } from "../credits";

export const MirinTemplateforNotITG: IBrand = {
  name: "Mirin Template for NotITG",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Mirin Template for NotITG/MirinTemplateLogoFilled.png",
      credit: getCredit(Author.Aikoyori),
      type: "filled",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Mirin Template for NotITG/MirinTemplateLogoFlattened.png",
      credit: getCredit(Author.Aikoyori),
      type: "flattened",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Mirin Template for NotITG/MirinTemplateLogoShadowed.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadowed",
    },
  ],
};
