import { Author, getCredit } from "../credits";

export const Gitlab: IBrand = {
    name: 'Gitlab',
    logos: [
        
        {
            url: '/DownloadedLogos/Gitlab.png',
            credit: getCredit(Author.SAWARATSUKI),
            type: 'default',
        },
        
    ]
}
