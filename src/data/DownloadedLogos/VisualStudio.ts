import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const VisualStudio: IBrand = {
  name: "Visual Studio",
  logos: [
    {
      url: "/DownloadedLogos/VisualStudio/VisualStudioLogo.png",
      credit: getCredit(Author.hvpexe),
      type: "default",
    },
    {
      url: "/DownloadedLogos/VisualStudio/VisualStudioLogoShadow.png",
      credit: getCredit(Author.hvpexe),
      type: "shadowed",
    },
  ],
};
