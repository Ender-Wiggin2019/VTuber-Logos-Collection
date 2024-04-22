import { Author, getCredit } from "../credits";

export const Nodejs: IBrand = {
    name: 'Node.js',
    logos: [
        
        {
            url: '/DownloadedLogos/Node.js.png',
            credit: getCredit(Author.SAWARATSUKI),
            type: 'default',
        },
        
    ]
}
