import { Search } from "lucide-react";
import { Input } from "../ui/input";

type Props = {
  // search: string;
  setSearch: (search: string) => void;
};
export function SearchBar({ setSearch }: Props) {
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input type="search" placeholder="Search logos..." className="pl-8 sm:w-[300px] md:w-[400px] lg:w-[500px]" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}
