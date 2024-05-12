import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Rust: IBrand = {
  name: "Rust",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Rust/Rust.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
