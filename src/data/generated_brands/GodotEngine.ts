import { Author, getCredit } from "../credits";

export const GodotEngine: IBrand = {
    name: 'GodotEngine',
    logos: [
        
        {
            url: '/ProgrammingVTuberLogos/GodotEngine/GodotLogo.png',
            credit: getCredit(Author.Aikoyori),
            type: 'default',
        },
        
        {
            url: '/ProgrammingVTuberLogos/GodotEngine/GodotLogoShadow.png',
            credit: getCredit(Author.Aikoyori),
            type: 'shadow',
        },
        
    ]
}
