import { Author, getCredit } from "../credits";

export const Tailwindcss: IBrand = {
  name: "Tailwindcss",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Tailwindcss/Tailwindcss6.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
