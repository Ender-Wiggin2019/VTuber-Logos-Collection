"use client";

import { BrandCardList } from "@/components/comp/card-list";
import { SearchBar } from "@/components/comp/search-bar";
import { BRANDS } from "@/data/brand";
import Image from "next/image";
import { useState } from "react";
import Fuse from "fuse.js";

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
    <main className="flex min-h-screen flex-col items-center justify-start p-4 space-y-4 w-full max-w-7xl">
      <SearchBar setSearch={setSearch} />
      <div className="z-10 items-center justify-between text-sm lg:flex">
        <BrandCardList brands={filteredBrands} />
      </div>
    </main>
  );
}
