"use client";

import { BrandCardList } from "@/components/comp/card-list";
import { SearchBar } from "@/components/comp/search-bar";
import { BRANDS } from "@/data/brand";
import { IBrand } from "@/data/type";
import { filterByAuthor } from "@/lib/utils";
import Fuse from "fuse.js";
import { Github } from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";

type Props = {
  brands: IBrand[];
};
export default function BrandList({ brands }: Props) {
  const [search, setSearch] = useState<string>("");

  const fuseOptions = {
    keys: ["name", "aliases"],
    includeScore: true,
    threshold: 0.1,
  };

  const fuse = new Fuse(brands, fuseOptions);

  const results = fuse.search(search);

  const filteredBrands = search ? results.map((result) => result.item) : brands;
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 space-y-4 w-full max-w-7xl">
      <div className="flex justify-between items-center w-full space-x-2">
        <SearchBar setSearch={setSearch} />
        <div className="flex space-x-4 text-muted-foreground">
          {/* <Link href="" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </Link> */}
          <Link href="https://github.com/Ender-Wiggin2019/VTuber-Logos-Collection" target="_blank" rel="noopener noreferrer">
            <Github />
          </Link>
        </div>
      </div>
      <div className="w-full z-10 items-center justify-between text-sm lg:flex">
        <BrandCardList brands={filteredBrands} />
      </div>
    </main>
  );
}
