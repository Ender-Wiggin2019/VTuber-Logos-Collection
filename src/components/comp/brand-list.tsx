"use client";

import { BrandCardList } from "@/components/comp/card-list";
import { ToolBar } from "@/components/comp/tool-bar";
import { BRANDS } from "@/data/brand";
import { IBrand } from "@/data/type";
import { cn, filterByAuthor } from "@/lib/utils";
import Fuse from "fuse.js";
import { Github } from "lucide-react";
import Link from "next/link";
import { Suspense, useMemo, useState } from "react";

type Props = {
  brands: IBrand[];
};
export default function BrandList({ brands }: Props) {
  const [search, setSearch] = useState<string>("");

  const filteredBrands = useMemo(() => {
    const lowercaseSearch = search.toLowerCase();
    if (!lowercaseSearch) {
      return brands;
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
  }, [search, brands]);

  return (
    <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-start space-y-4 p-4">
      <div className="flex w-full items-center space-x-2 py-2">
        <ToolBar setSearch={setSearch} />
        <div className="flex w-full justify-end space-x-4 text-muted-foreground">
          {/* <Link href="" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </Link> */}
          <Link href="https://github.com/Ender-Wiggin2019/VTuber-Logos-Collection" target="_blank" rel="noopener noreferrer">
            <Github />
          </Link>
        </div>
      </div>
      <div className="z-10 w-full items-center justify-between text-sm lg:flex">
        <LoadingSpinner />
        1111
        <BrandCardList brands={filteredBrands} />
      </div>
    </main>
  );
}

export const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};
