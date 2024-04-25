import { Author, getCredit } from "../credits";

export const Clion: IBrand = {
  name: "Clion",
  aliases: ["JetBrains", "jb"],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Clion/Clion.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
