import { Author, getCredit } from "../credits";

export const GodotEngine: IBrand = {
  name: "GodotEngine",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/GodotEngine/GodotLogo.png",
      credit: getCredit(Author.Aikoyori),
      type: "godot",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/GodotEngine/GodotLogoShadow.png",
      credit: getCredit(Author.Aikoyori),
      type: "godotshadow",
    },
  ],
};
