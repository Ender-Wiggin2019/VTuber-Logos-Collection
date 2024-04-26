import BrandList from "@/components/comp/brand-list";
import { BRANDS } from "@/data/brand";
import { filterByAuthor } from "@/lib/utils";

export default function Page({ params }: { params: { slug: string } }) {
  return (<BrandList brands={filterByAuthor(BRANDS, params.slug)}/>);
}