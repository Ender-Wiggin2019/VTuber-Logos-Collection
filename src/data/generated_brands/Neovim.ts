import { Author, getCredit } from "../credits";

export const Neovim: IBrand = {
    name: 'Neovim',
    logos: [
        
        {
            url: '/ProgrammingVTuberLogos/Neovim/NeovimLogo.png',
            credit: getCredit(Author.Aikoyori),
            type: 'default',
        },
        
        {
            url: '/ProgrammingVTuberLogos/Neovim/NeovimShadowed.png',
            credit: getCredit(Author.Aikoyori),
            type: 'shadow',
        },
        
    ]
}
