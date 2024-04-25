import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const VSCode: IBrand = {
  name: "Visual Studio Code",
  aliases: ["vsc", "vscode", "vs code"],
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
