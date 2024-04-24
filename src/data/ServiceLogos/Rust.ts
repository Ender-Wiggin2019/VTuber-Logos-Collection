import { Author, getCredit } from "../credits";

export const Rust: IBrand = {
  name: "Rust",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Rust/Rust.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
