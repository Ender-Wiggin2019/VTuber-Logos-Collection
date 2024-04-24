import { Author, getCredit } from "../credits";

export const ArchLinux: IBrand = {
  name: "ArchLinux",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/ArchLinux/ArchLinux.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
