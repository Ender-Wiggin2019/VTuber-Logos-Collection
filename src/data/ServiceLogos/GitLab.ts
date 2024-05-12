import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const GitLab: IBrand = {
  name: "Gitlab",
  categories: [BrandCategory.DEV_TOOLS],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/GitLab/GitLab.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
