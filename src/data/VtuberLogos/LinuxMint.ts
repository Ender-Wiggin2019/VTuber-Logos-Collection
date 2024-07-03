import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const LinuxMint: IBrand = {
  name: "Linux Mint",
  categories: [BrandCategory.OS],
  logos: [
    {
      url: "https://raw.githubusercontent.com/syke9p3/Syke-VTuber-Icons/main/Linux%20Mint/Mint.png",
      credit: getCredit(Author.syke9p3),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/syke9p3/Syke-VTuber-Icons/main/Linux%20Mint/MintStroked.png",
      credit: getCredit(Author.syke9p3),
      type: "stroked",
    },

    {
      url: "https://raw.githubusercontent.com/syke9p3/Syke-VTuber-Icons/main/Linux%20Mint/MintShadowed.png",
      credit: getCredit(Author.syke9p3),
      type: "shadowed",
    },
  ],
};
