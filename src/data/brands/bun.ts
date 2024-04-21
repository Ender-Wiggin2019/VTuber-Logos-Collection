import { Author, getCredit } from "../credits";

export const Bun: IBrand = {
    name: 'Bun.sh',
    aliases: ['Bun'],
    logos: [
        {
            url: '/ProgrammingVTuberLogos/Bun/BunLogo.png',
            credit: getCredit(Author.Aikoyori),
        },

        {
            url: '/ProgrammingVTuberLogos/Bun/BunLogoOld.png',
            type: 'old',
            credit: getCredit(Author.Aikoyori),
        },
        {
            url: '/ProgrammingVTuberLogos/Bun/BunLogoShadowed.png',
            type: 'shadowed',
            credit: getCredit(Author.Aikoyori),
        },
        {
            url: '/ProgrammingVTuberLogos/Bun/BunLogoShadowedOld.png',
            type: 'shadow old',
            credit: getCredit(Author.Aikoyori),
        },
    ]

}
