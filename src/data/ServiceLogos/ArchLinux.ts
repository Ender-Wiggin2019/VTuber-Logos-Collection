import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const ArchLinux: IBrand = {
  name: "Arch Linux",
  categories: [BrandCategory.OS],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/ArchLinux/ArchLinux.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
