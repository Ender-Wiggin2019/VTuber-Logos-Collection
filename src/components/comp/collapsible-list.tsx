"use client";

import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { IFilter } from "@/data/type";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  filter: IFilter;
};
export function CollapsibleList({ filter }: Props) {
  const initOptions = filter.initOptionNames;
  const [isOpen, setIsOpen] = useState(true);
  const [filteredOptions, setFilteredOptions] = useState<Set<string>>(new Set(initOptions));

  const handleClick = (optionName: string) => {
    let tmpFilteredOptions = new Set(filteredOptions);
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

    setFilteredOptions(tmpFilteredOptions);

    filter.onClickOption?.(tmpFilteredOptions);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={cn("w-full space-y-2", { "": isOpen })}>
      <CollapsibleTrigger asChild className="cursor-pointer">
        <div className={cn("flex items-center justify-between space-x-4 px-4 rounded-md border border-dashed", { "border-primary": isOpen })}>
          <div className="flex items-center space-x-4">
            {filter.filterIcon}
            <h4 className="text-sm font-semibold">{filter.filterHeader}</h4>
          </div>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 px-2">
        {filter.filterOptions.map((option, index) => (
          <button
            key={index}
            className={cn("w-full rounded-md border px-3 py-2 text-sm font-normal flex justify-between items-center", { "bg-muted": filteredOptions.has(option.name) })}
            onClick={() => handleClick(option.name)}
          >
            {option.name}
            <div
              className={cn("bg-muted rounded-full h-6 w-6 text-xs flex justify-center items-center", { "bg-primary text-primary-foreground": filteredOptions.has(option.name) })}
            >
              {option.count}
            </div>
          </button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
