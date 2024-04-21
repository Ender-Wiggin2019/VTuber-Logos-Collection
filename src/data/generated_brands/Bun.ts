import { Author, getCredit } from "../credits";

export const Bun: IBrand = {
    name: 'Bun',
    logos: [
        
        {
            url: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Bun/BunLogo.png',
            credit: getCredit(Author.Aikoyori),
            type: 'default',
        },
        
        {
            url: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Bun/BunLogoOld.png',
            credit: getCredit(Author.Aikoyori),
            type: 'old',
        },
        
        {
            url: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Bun/BunLogoShadowed.png',
            credit: getCredit(Author.Aikoyori),
            type: 'shadow',
        },
        
        {
            url: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Bun/BunLogoShadowedOld.png',
            credit: getCredit(Author.Aikoyori),
            type: 'shadow old',
        },
        
    ]
}
