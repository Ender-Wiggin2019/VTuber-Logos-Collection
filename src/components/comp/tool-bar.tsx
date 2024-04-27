
import { SearchBar } from "@/components/comp/search-bar";
import { ToTopButton } from "./to-top-button";

type Props = {
  // search: string;
  setSearch: (search: string) => void;
};

export function ToolBar({ setSearch }: Props) {
  return (
    <div className="fixed flex items-center z-50">
      <SearchBar setSearch={setSearch} />
      <ToTopButton />
    </div>
  );
}
