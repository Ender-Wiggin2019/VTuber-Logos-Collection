import BrandList from "@/components/comp/brand-list";
import { BRANDS } from "@/data/brand";

export default function Home() {
  return <BrandList brands={BRANDS} />;
}
