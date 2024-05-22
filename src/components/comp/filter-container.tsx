import { CREDITS } from "@/data/credits";
import { FilterFunctionsMap, IBrand, IFilter, IFilterOption } from "@/data/type";
import { CollapsibleList } from "./collapsible-list";
import { BRANDS } from "@/data/brand";
import { BrandCategory } from "@/data/categories";
import { useState } from "react";
import { Package, Users } from "lucide-react";

type Props = {
  onChangeFilter: (filterFunctions: FilterFunctionsMap) => void;
};
export function FilterContainer({ onChangeFilter }: Props) {
  const [filterFunctions, setFilterFunctions] = useState<Map<string, (brands: IBrand[]) => IBrand[]>>(new Map());

  // filter config
  const filterData: IFilter[] = [
    {
      filterHeader: "Author",
      filterIcon: <Users className="h-4 w-4" />,
      filterOptions: authorOptions,
      initOptionNames: authorOptions.map((option) => option.name),
      onClickOption: (selectedAuthors: Set<string>) => onClickOptionUpdate("Author", createFilterByAuthors, selectedAuthors),
    },
    {
      filterHeader: "Categories",
      filterIcon: <Package className="h-4 w-4" />,

      filterOptions: categoriesOptions,
      initOptionNames: categoriesNames,
      onClickOption: (selectedCategories: Set<string>) => onClickOptionUpdate("Categories", createFilterByCategories, selectedCategories),
    },
  ];

  const onClickOptionUpdate = (key: string, fn: (selectedAuthors: Set<string>) => (brands: IBrand[]) => IBrand[], options: Set<string>) => {
    const filterFunction = fn(options);
    const newFilterFunctions = new Map(filterFunctions);
    newFilterFunctions.set(key, filterFunction);
    setFilterFunctions(newFilterFunctions);
    onChangeFilter(newFilterFunctions);
  };

  return (
    <div className="flex flex-col gap-4">
      {filterData.map((filter, index) => (
        <CollapsibleList key={index} filter={filter} />
      ))}
    </div>
  );
}

// OPTIMIZE: ssg
let authorOptions: IFilterOption[] = [];
const authorNames = Object.values(CREDITS).map((credit) => credit.author);
// console.log(authorNames, authorOptions);
for (const brand of BRANDS) {
  for (const logo of brand.logos) {
    if (!authorOptions.map((a) => a.name).includes(logo.credit.author)) {
      authorOptions.push({ name: logo.credit.author, count: 1 });
    } else {
      authorOptions.find((option) => option.name === logo.credit.author)!.count! += 1;
    }
  }
}
authorOptions.sort((a, b) => (b.count ?? 0) - (a.count ?? 0));
console.log(authorOptions);

function createFilterByAuthors(selectedAuthors: Set<string>) {
  return (brands: IBrand[]): IBrand[] => {
    return brands.filter((brand) => brand.logos.some((logo) => selectedAuthors.has(logo.credit.author)));
  };
}

// OPTIMIZE: ssg
const categoriesOptions: IFilterOption[] = [];
const categoriesNames = Object.values(BrandCategory);
for (const brand of BRANDS) {
  brand.categories = brand.categories ? brand.categories : [BrandCategory.OTHER];
  const categories = brand.categories;

  for (const category of categories) {
    if (!categoriesOptions.map((a) => a.name).includes(category)) {
      categoriesOptions.push({ name: category, count: 1 });
    } else {
      categoriesOptions.find((option) => option.name === category)!.count! += 1;
    }
  }
}

function createFilterByCategories(selectedCategories: Set<string>) {
  return (brands: IBrand[]): IBrand[] => {
    return brands.filter((brand) => brand.categories && brand.categories.some((category) => selectedCategories.has(category)));
  };
}
