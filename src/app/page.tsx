"use client";

import { BRANDS } from "@/data/brand";
import { Github, Menu } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import { BrandCardList } from "@/components/comp/card-list";
import { FilterContainer } from "@/components/comp/filter-container";
import { ToolBar } from "@/components/comp/tool-bar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IBrand } from "@/data/type";
import Link from "next/link";

const INIT_LIMIT = 18;

export default function Dashboard() {
  const [brands, setBrands] = useState<IBrand[]>(BRANDS);
  const [filterFunctions, setFilterFunctions] = useState<Map<string, (brands: IBrand[]) => IBrand[]>>(new Map());
  const [limit, setLimit] = useState(INIT_LIMIT);

  const onChangeFilter = useCallback((newFilterFunctions: Map<string, (brands: IBrand[]) => IBrand[]>) => {
    setLimit(INIT_LIMIT); // reset limit
    setFilterFunctions(newFilterFunctions);
  }, []);

  const filterFunction = useCallback(
    (brands: IBrand[]) => {
      return Array.from(filterFunctions.values()).reduce((prev, fn) => fn(prev), brands);
    },
    [filterFunctions]
  );
  const [search, setSearch] = useState<string>("");

  const handleLimitChange = () => {
    setLimit((prev) => prev + INIT_LIMIT);
  }

  const searchedBrands = useMemo(() => {
    const lowercaseSearch = search.toLowerCase();
    if (!lowercaseSearch) {
      return filterFunction(BRANDS);
    }

    const res = brands.filter((brand) => {
      if (brand.name.toLowerCase().includes(lowercaseSearch)) {
        return true;
      }

      if (brand?.aliases?.some((alias) => alias.toLowerCase().includes(lowercaseSearch))) {
        return true;
      }

      return false;
    });
    return res;
  }, [search, brands, filterFunction]);


  const limitedData = useMemo(() => {
    const isCut = searchedBrands?.length > limit;
    return {
      isCut,
      brands: isCut ? searchedBrands.slice(0, limit) : searchedBrands
    }
  }, [limit, searchedBrands])

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="">VTuber Style Logos</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <FilterContainer onChangeFilter={onChangeFilter} />
            </nav>
          </div>
          <div className="mt-auto p-4">
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col overflow-auto">
              <div className="md:hidden w-fit">
                <Link href="https://github.com/Ender-Wiggin2019/VTuber-Logos-Collection" target="_blank" rel="noopener noreferrer">
                  <Github />
                </Link>
              </div>
              <nav className="grid gap-2 text-lg font-medium">
                <FilterContainer onChangeFilter={onChangeFilter} />
              </nav>
              <div className="mt-auto"></div>
            </SheetContent>
          </Sheet>
          <div className=" w-full relative h-10">
            <ToolBar setSearch={setSearch} />
          </div>
          <div className="hidden md:block">
            <Link href="https://github.com/Ender-Wiggin2019/VTuber-Logos-Collection" target="_blank" rel="noopener noreferrer">
              <Github />
            </Link>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 max-w-screen-2xl">
          <div className="flex items-center">{/* <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1> */}</div>
          <div className="flex flex-1 items-start justify-center rounded-lg border-0 border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
            <div className="w-full z-10 items-center justify-between text-sm lg:flex overflow-y-auto">
              <BrandCardList brands={limitedData.brands} />
            </div>
          </div>

            {limitedData.isCut && (
              <Button className="mb-4 h-16 text-2xl"onClick={handleLimitChange}>View More</Button>)
              }
        </main>
      </div>
    </div>
  );
}