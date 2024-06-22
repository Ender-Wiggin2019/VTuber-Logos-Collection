import { IBrand, ILogo } from "@/data/type";
import { BrandCategory } from "@/data/categories";
import { Author, getCredit } from "@/data/credits";

export enum CuteLogosLogoType {
  Default = "default",
}

export class C29H25N3O5Brand implements IBrand {
  name: string;
  aliases?: string[];
  categories?: BrandCategory[];
  logos: ILogo[];

  constructor(
    name: string,
    aliases: string[],
    categories: BrandCategory[],
    logos: {
      url: string;
      type: CuteLogosLogoType;
    }[]
  ) {
    this.name = name;
    this.aliases = ["C29H25N3O5", "26f studio", "studio26f", ...aliases];
    this.categories = categories;
    this.logos = logos.map((logo) => ({
      url: logo.url,
      credit: getCredit(Author.C29H25N3O5),
      type: logo.type,
    }));
  }
}
