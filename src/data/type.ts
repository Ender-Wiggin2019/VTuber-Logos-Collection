import { Category } from "./categories";

export interface IBrand {
  name: string;
  aliases?: string[];
  categories?: Category[];
  logos: ILogo[];
}

export interface ILogo {
  default?: boolean;
  url: string;
  type?: string; // undefined is normal type
  credit: ICredit;
}

export interface ICredit {
  author: string;
  twitter?: string;
  github?: string;
}
