import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const ArchLinux: IBrand = {
  name: "Arch Linux",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/ArchLinux/ArchLinux.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
