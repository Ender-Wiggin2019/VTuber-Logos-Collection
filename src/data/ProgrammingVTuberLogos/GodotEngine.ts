import { Author, getCredit } from "../credits";

export const GodotEngine: IBrand = {
  name: "Godot Engine",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/GodotEngine/GodotLogo.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/GodotEngine/GodotLogoShadow.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadow",
    },
  ],
};
