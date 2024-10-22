import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Lua: IBrand = {
  name: "Lua",
  logos: [
    {
      url: "/DownloadedLogos/Lua/Lua.png",
      credit: getCredit(Author.NatchaLatteOfficial),
      type: "default",
    },
  ],
};
