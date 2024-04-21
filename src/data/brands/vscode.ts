import { Author, getCredit } from "../credits";

export const VisualStudioCode: IBrand = {
    name: 'Visual Studio Code',
    logos: [
        {
            // default: true,
            url: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/VSCode/VSCode.png',
            credit: getCredit(Author.Aikoyori),
        },

        {
            url: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/VSCode/VSCode-Thick.png',
            type: 'think',
            credit: getCredit(Author.Aikoyori),
        },
    ]

}
