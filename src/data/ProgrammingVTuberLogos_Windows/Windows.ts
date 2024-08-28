import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const Windows: IBrand = {
    name: "Windows",
    categories: [BrandCategory.OS],
    logos: [
      {
        url: "https://raw.githubusercontent.com//Shiroiame-Kusu/ProgrammingVTuberLogos-Windows/main/Windows/WindowsLogoShadow.png",
        credit: getCredit(Author.Shiroame_Kusu),
        type: "default",
      },
    ],
  };