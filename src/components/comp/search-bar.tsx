/*
 * @Author: Ender-Wiggin
 * @Date: 2024-09-25 00:13:19
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2025-04-02 02:13:44
 * @Description:
 */
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { debounce } from "lodash";

type Props = {
  // search: string;
  setSearch: (search: string) => void;
};
export function SearchBar({ setSearch }: Props) {

  const handleChange = debounce((e) => {
    setSearch(e.target.value);
  }, 500);

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input autoFocus type="search" placeholder="Search logos..." className="pl-8 sm:w-[300px] md:w-[400px] lg:w-[500px]" onChange={handleChange} />
    </div>
  );
}
