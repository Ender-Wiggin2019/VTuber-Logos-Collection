import { IBrand } from "@/data/type";
import { BrandCard } from "./brand-card";

type Props = {
  brands: IBrand[];
};
export function BrandCardList({ brands }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {brands.map((brand) => (
        <BrandCard key={brand.name + brand.logos[0].credit.author} brand={brand} />
      ))}
    </div>
  );
}
