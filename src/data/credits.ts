export enum Author {
    Aikoyori,
}
export const CREDITS: { [key in Author]: ICredit } = {
    [Author.Aikoyori]: {
        author: 'Aikoyori',
        twitter: 'https://twitter.com/Aikoyori',
        github: 'https://github.com/Aikoyori',
    },
};

export function getCredit(author: Author): ICredit {
    return CREDITS[author];
}