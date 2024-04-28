"use client";

import { ChevronsUpDown, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { IBrand, IFilter } from "@/data/type";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  filter: IFilter;
};
export function CollapsibleList({ filter }: Props) {
  // const initOptions = filter.filterOptions.map((option) => option.name);
  const initOptions = filter.initOptionNames;
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<Set<string>>(new Set(initOptions));

  // console.log(filteredOptions);

  const handleClick = (optionName: string) => {
    setFilteredOptions((prev) => {
      let tmpFilteredOptions = new Set(prev);
      if (filteredOptions.size === initOptions.length) {
        // when it's default state, we should clear all options first
        tmpFilteredOptions = new Set([optionName]);
      } else if (tmpFilteredOptions.has(optionName)) {
        tmpFilteredOptions.delete(optionName);
      } else {
        tmpFilteredOptions.add(optionName);
      }

      if (tmpFilteredOptions.size === 0) {
        tmpFilteredOptions = new Set(initOptions);
      }

      filter.onClickOption?.(tmpFilteredOptions);
      return tmpFilteredOptions;
    });
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
      <CollapsibleTrigger asChild className="cursor-pointer">
        <div className={cn("flex items-center justify-between space-x-4 px-4 rounded-xl border border-dashed", { "bg-muted": isOpen })}>
          <h4 className="text-sm font-semibold">{filter.filterHeader}</h4>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        {filter.filterOptions.map((option, index) => (
          <button
            key={index}
            className={cn("w-full rounded-md border px-4 py-2 text-sm font-normal flex justify-between items-center", { "bg-muted": filteredOptions.has(option.name) })}
            onClick={() => handleClick(option.name)}
          >
            {option.name}
            <div className="bg-muted round-md h-6 w-6 flex justify-center items-center">{option.count}</div>
          </button>
        ))}
        {/* <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div> */}
      </CollapsibleContent>
    </Collapsible>
  );
}
