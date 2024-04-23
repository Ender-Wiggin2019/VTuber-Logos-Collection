"use client";

import { BrandCardList } from "@/components/comp/card-list";
import { SearchBar } from "@/components/comp/search-bar";
import { BRANDS } from "@/data/brand";
import Image from "next/image";
import { useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const fuseOptions = {
    keys: ["name", "alias"], // 指定搜索的字段
    includeScore: true, // 可选，是否包含分数
    threshold: 0.3, // 搜索结果匹配度的阈值（0为完全匹配，1为完全不匹配）
  };

  const fuse = new Fuse(BRANDS, fuseOptions);

  const results = fuse.search(search);

  const filteredBrands = search ? results.map((result) => result.item) : BRANDS;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 space-y-4 w-full max-w-7xl">
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
