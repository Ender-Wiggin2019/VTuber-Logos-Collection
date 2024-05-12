import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const KernelPanic: IBrand = {
  name: "Kernel Panic",
  aliases: [],
  categories: [],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Kernel Panic/KernelPanic.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
