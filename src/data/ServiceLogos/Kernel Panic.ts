import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const KernelPanic: IBrand = {
  name: "Kernel Panic",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Kernel Panic/KernelPanic.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
