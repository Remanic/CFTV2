import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import both the data and the type
import { stateDeadlines, StateDeadline } from "./data/stateDeadlines";

export const StateDeadlineFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDeadline, setSelectedDeadline] = useState<StateDeadline | null>(null);
  const [noResults, setNoResults] = useState(false);
  const [searchResults, setSearchResults] = useState<StateDeadline[]>([]);

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    const deadline = stateDeadlines.find(d => d.state === state);
    setSelectedDeadline(deadline || null);
    setNoResults(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (!value.trim()) {
      setSearchResults([]);
      setNoResults(false);
      return;
    }

    const filtered = stateDeadlines.filter(deadline =>
      deadline.state.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filtered);
    setNoResults(filtered.length === 0);
  };

  const handleSearchResultClick = (deadline: StateDeadline) => {
    setSelectedDeadline(deadline);
    setSearchTerm(deadline.state);
    setSearchResults([]);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedState("");
    setSelectedDeadline(null);
    setNoResults(false);
    setSearchResults([]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Find Your State's FAFSA Deadline
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search for your state..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-6 w-6 p-0"
                  onClick={clearSearch}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              
              {/* Search Results Dropdown */}
              {searchResults.length > 0 && searchTerm && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                  {searchResults.map((deadline) => (
                    <button
                      key={deadline.state}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      onClick={() => handleSearchResultClick(deadline)}
                    >
                      {deadline.state}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <Select value={selectedState} onValueChange={handleStateSelect}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {stateDeadlines.map((deadline) => (
                    <SelectItem key={deadline.state} value={deadline.state}>
                      {deadline.state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {noResults && (
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No matching states found. Please try a different search term.</p>
            </div>
          )}

          {selectedDeadline && (
            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {selectedDeadline.state}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-blue-800">Deadline:</p>
                  <p className="text-blue-700">{selectedDeadline.deadline}</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">Details:</p>
                  <p className="text-blue-700 whitespace-pre-line">
                    {selectedDeadline.details}
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};