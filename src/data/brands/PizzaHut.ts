import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const PizzaHut: IBrand = {
  name: "Pizza Hut",
  logos: [
    {
      url: "/FindViaTwitterLogos/PizzaHut/PizzaHut.png",
      credit: getCredit(Author.AisuAsai),
      type: "default",
    },
  ],
};
