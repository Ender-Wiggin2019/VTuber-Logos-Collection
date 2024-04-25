import { Category } from "./categories";

interface IBrand {
  name: string;
  aliases?: string[];
  categories?: Category[];
  logos: ILogo[];
}

interface ILogo {
  default?: boolean;
  url: string;
  type?: string; // undefined is normal type
  credit: ICredit;
}

interface ICredit {
  author: string;
  twitter?: string;
  github?: string;
}
