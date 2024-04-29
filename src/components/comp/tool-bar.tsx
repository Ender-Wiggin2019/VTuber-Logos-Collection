import { SearchBar } from "@/components/comp/search-bar";
import { ToTopButton } from "./to-top-button";
import { DarkModeToggle } from "./dark-mode-toggle";

type Props = {
  // search: string;
  setSearch: (search: string) => void;
};

export function ToolBar({ setSearch }: Props) {
  return (
    <div className="fixed flex items-center z-50 space-x-4 h-10">
      <SearchBar setSearch={setSearch} />
      <ToTopButton />
      <DarkModeToggle />
    </div>
  );
}
