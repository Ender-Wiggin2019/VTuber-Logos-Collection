import { CREDITS } from "@/data/credits";
import { IBrand, IFilter, IFilterOption } from "@/data/type";
import { CollapsibleList } from "./collapsible-list";
import { BRANDS } from "@/data/brand";
import { BrandCategory } from "@/data/categories";
import { useState } from "react";

type Props = {
  brands: IBrand[];
  onChangeFilter: (key: string, fn: (brands: IBrand[]) => IBrand[]) => void; // return a filter function
};
export function FilterContainer({ brands, onChangeFilter }: Props) {
  const [filterFunctions, setFilterFunctions] = useState<Map<string, (brands: IBrand[]) => IBrand[]>>(new Map());

  const filterData: IFilter[] = [
    {
      filterHeader: "Author",
      filterOptions: authorOptions,
      initOptionNames: authorOptions.map((option) => option.name),
      onClickOption: (selectedAuthors: Set<string>) => {
        // 使用 createFilterByAuthors 创建一个过滤函数
        const filterFunction = createFilterByAuthors(selectedAuthors);
        // 通过 onChangeFilter 将过滤函数传递出去

        filterFunctions.set("Author", filterFunction);
        onChangeFilter("Author", filterFunction);
      },
    },
    {
      filterHeader: "Categories",
      filterOptions: categoriesOptions,
      initOptionNames: categoriesNames,
      onClickOption: (selectedAuthors: Set<string>) => {
        // 使用 createFilterByAuthors 创建一个过滤函数
        const filterFunction = createFilterByCategories(selectedAuthors);

        filterFunctions.set("Categories", filterFunction);
        // 通过 onChangeFilter 将过滤函数传递出去
        onChangeFilter("Categories", filterFunction);
      },
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {filterData.map((filter, index) => (
        <CollapsibleList key={index} filter={filter} />
      ))}
    </div>
  );
}

// OPTIMIZE: ssg
const authorOptions: IFilterOption[] = [];
const authorNames = Object.values(CREDITS).map((credit) => credit.author);
console.log(authorNames, authorOptions);
for (const brand of BRANDS) {
  for (const logo of brand.logos) {
    if (!authorOptions.map((a) => a.name).includes(logo.credit.author)) {
      authorOptions.push({ name: logo.credit.author, count: 1 });
    } else {
      authorOptions.find((option) => option.name === logo.credit.author)!.count! += 1;
    }
  }
}

function createFilterByAuthors(selectedAuthors: Set<string>) {
  return (brands: IBrand[]): IBrand[] => {
    return brands.filter((brand) => brand.logos.some((logo) => selectedAuthors.has(logo.credit.author)));
  };
}

// OPTIMIZE: ssg
const categoriesOptions: IFilterOption[] = [];
const categoriesNames = Object.values(BrandCategory);
console.log(categoriesNames, authorOptions);
for (const brand of BRANDS) {
  const categories = brand.categories ? brand.categories : ["other"];

  for (const category of categories) {
    if (!categoriesOptions.map((a) => a.name).includes(category)) {
      categoriesOptions.push({ name: category, count: 1 });
    } else {
      categoriesOptions.find((option) => option.name === category)!.count! += 1;
    }
  }
}

function createFilterByCategories(selectedAuthors: Set<string>) {
  return (brands: IBrand[]): IBrand[] => {
    return brands.filter((brand) => brand.logos.some((logo) => selectedAuthors.has(logo.credit.author)));
  };
}
