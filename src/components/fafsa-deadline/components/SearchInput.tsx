import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StateDeadline } from "../data/2025/types";

interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onClearSearch: () => void;
  searchResults: StateDeadline[];
  onResultClick: (deadline: StateDeadline) => void;
  noResults: boolean;
  showResults: boolean;
}

export const SearchInput = ({
  searchTerm,
  onSearchChange,
  onClearSearch,
  searchResults,
  onResultClick,
  noResults,
  showResults,
}: SearchInputProps) => {
  return (
    <div className="relative flex-1">
      <Input
        type="text"
        placeholder="Search for your state..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 pr-10"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      {searchTerm && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-6 w-6 p-0"
          onClick={onClearSearch}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
      
      {showResults && searchResults.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          {searchResults.map((deadline) => (
            <button
              key={deadline.state}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              onClick={() => onResultClick(deadline)}
            >
              {deadline.state}
            </button>
          ))}
        </div>
      )}
      
      {noResults && (
        <div className="absolute z-10 w-full mt-1 p-4 bg-white border border-gray-200 rounded-md shadow-lg text-center text-gray-600">
          No matching states found
        </div>
      )}
    </div>
  );
};