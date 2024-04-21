import { Author, getCredit } from "../credits";

export const PizzaHut: IBrand = {
    name: 'Pizza Hut',
    logos: [

        {
            url: '/FindViaTwitterLogos/PizzaHut/PizzaHut.png',
            credit: getCredit(Author.AisuAsai),
            type: 'default',
        },
    ]
}
