import { BrandCardList } from "@/components/comp/card-list";
import { BRANDS } from "@/data/brands";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-7xl items-center justify-between text-sm lg:flex">
        <BrandCardList brands={BRANDS} />
      </div>
    </main>
  );
}
