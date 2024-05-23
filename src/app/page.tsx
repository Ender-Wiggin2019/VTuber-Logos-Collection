"use client";

import { BRANDS } from "@/data/brand";
import Fuse from "fuse.js";
import { Github, Menu } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

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

export default function Dashboard() {
  const [brands, setBrands] = useState<IBrand[]>(BRANDS);
  const [filterFunctions, setFilterFunctions] = useState<Map<string, (brands: IBrand[]) => IBrand[]>>(new Map());

  const onChangeFilter = useCallback((newFilterFunctions: Map<string, (brands: IBrand[]) => IBrand[]>) => {
    setFilterFunctions(newFilterFunctions);
  }, []);

  const filterFunction = useCallback(
    (brands: IBrand[]) => {
      return Array.from(filterFunctions.values()).reduce((prev, fn) => fn(prev), brands);
    },
    [filterFunctions]
  );
  const [search, setSearch] = useState<string>("");
  const fuseOptions = {
    keys: ["name", "aliases"], // search in name and aliases
    includeScore: true,
    threshold: 0, // perfect match
  };

  const firstFilteredBrands = filterFunction(BRANDS); // from origin source

  const fuse = new Fuse(firstFilteredBrands, fuseOptions);
  const results = fuse.search(search);
  const searchedBrands = search ? results.map((result) => result.item) : firstFilteredBrands;

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              {/* <Package2 className="h-6 w-6" /> */}
              <span className="">VTuber Style Logos</span>
            </Link>
            {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <FilterContainer onChangeFilter={onChangeFilter} />
            </nav>
          </div>
          <div className="mt-auto p-4">
            {/* <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade</CardTitle>
                <CardDescription>Unlock</CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card> */}
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
            <SheetContent side="left" className="flex flex-col">
              <div className="sm:hidden">
                <Link href="https://github.com/Ender-Wiggin2019/VTuber-Logos-Collection" target="_blank" rel="noopener noreferrer">
                  <Github />
                </Link>
              </div>
              <nav className="grid gap-2 text-lg font-medium">
                <FilterContainer onChangeFilter={onChangeFilter} />
                {/* <Link href="#" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link href="#" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link> */}
              </nav>
              <div className="mt-auto"></div>
            </SheetContent>
          </Sheet>
          <div className=" w-full relative h-10">
            {/* <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" />
              </div>
            </form> */}
            <ToolBar setSearch={setSearch} />
          </div>
          <div className="hidden sm:block">
            <Link href="https://github.com/Ender-Wiggin2019/VTuber-Logos-Collection" target="_blank" rel="noopener noreferrer">
              <Github />
            </Link>
          </div>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 max-w-screen-2xl">
          <div className="flex items-center">{/* <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1> */}</div>
          <div className="flex flex-1 items-start justify-center rounded-lg border--0 border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
            <div className="w-full z-10 items-center justify-between text-sm lg:flex overflow-y-auto">
              <BrandCardList brands={searchedBrands} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// import BrandList from "@/components/comp/brand-list";
// import { BRANDS } from "@/data/brand";

// export default function Home() {
//   return <BrandList brands={BRANDS} />;
// }
