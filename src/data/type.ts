import { BrandCategory } from "./categories";

export interface IBrand {
  name: string;
  aliases?: string[];
  categories?: BrandCategory[];
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
  pk: string;
  twitter?: string;
  github?: string;
}

export interface IFilterOption {
  name: string;
  count?: number;
}
export interface IFilter {
  filterHeader: string;
  filterOptions: IFilterOption[];
  initOptionNames: string[];
  // optionMapper: (options: IFilter["filterOptions"]) => string[],
  onClickOption?: (options: Set<string>) => void;
}
