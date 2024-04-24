import { Author, getCredit } from "../credits";

export const Flutter: IBrand = {
  name: "Flutter",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Flutter/FlutterTransparent.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
