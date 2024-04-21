import { Author, getCredit } from "../credits";

export const Bun: IBrand = {
    name: 'Bun',
    logos: [
        
        {
            url: '/ProgrammingVTuberLogos/Bun/BunLogo.png',
            credit: getCredit(Author.Aikoyori),
            type: 'default',
        },
        
        {
            url: '/ProgrammingVTuberLogos/Bun/BunLogoOld.png',
            credit: getCredit(Author.Aikoyori),
            type: 'old',
        },
        
        {
            url: '/ProgrammingVTuberLogos/Bun/BunLogoShadowed.png',
            credit: getCredit(Author.Aikoyori),
            type: 'shadow',
        },
        
        {
            url: '/ProgrammingVTuberLogos/Bun/BunLogoShadowedOld.png',
            credit: getCredit(Author.Aikoyori),
            type: 'shadow old',
        },
        
    ]
}
