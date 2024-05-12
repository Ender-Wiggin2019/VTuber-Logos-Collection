import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Svelte: IBrand = {
  name: "Svelte",
  aliases: [],
  categories: [BrandCategory.FRAMEWORK],
  logos: [
    {
      url: "https://raw.githubusercontent.com/mkpoli/VTuber-Styled-Logos/main/logos/Svelte/Svelte.png",
      credit: getCredit(Author.mkpoli),
      type: "default",
    },
  ],
};
