import { Author, getCredit } from "../credits";

export const RhineLab: IBrand = {
    name: 'RhineLab',
    logos: [
        
        {
            url: '/DownloadedLogos/RhineLab.png',
            credit: getCredit(Author.SAWARATSUKI),
            type: 'default',
        },
        
    ]
}
