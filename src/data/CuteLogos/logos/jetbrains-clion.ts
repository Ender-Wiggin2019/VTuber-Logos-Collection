import { CuteLogosAliases } from "@/data/CuteLogos/constants";
import { C29H25N3O5Brand, CuteLogosLogoType } from "@/data/CuteLogos/types";
import { BrandCategory } from "@/data/categories";

export const JetBrainsCLion = new C29H25N3O5Brand(
  "JetBrains CLion",
  ["ide", "jetbrains", ...CuteLogosAliases.cpp, ...CuteLogosAliases.dev],
  [BrandCategory.DEV_TOOLS, BrandCategory.IDE],
  [
    {
      url: "https://raw.githubusercontent.com/C29H25N3O5/cute-logos/main/dist/jetbrains-clion/default.png",
      type: CuteLogosLogoType.Default,
    },
  ]
);
