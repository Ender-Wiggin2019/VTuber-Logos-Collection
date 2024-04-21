export enum Author {
    Aikoyori,
    AisuAsai,
    sawaratsuki1004
}
export const CREDITS: { [key in Author]: ICredit } = {
    [Author.Aikoyori]: {
        author: 'Aikoyori',
        twitter: 'https://twitter.com/Aikoyori',
        github: 'https://github.com/Aikoyori',
    },
    [Author.AisuAsai]: {
        author: 'Aisu Asai',
        twitter: 'https://twitter.com/AisuAsai',
    },
    [Author.sawaratsuki1004]: {
        author: 'さわらつき',
        twitter: 'https://twitter.com/sawaratsuki1004',
    },
};

export function getCredit(author: Author): ICredit {
    return CREDITS[author];
}