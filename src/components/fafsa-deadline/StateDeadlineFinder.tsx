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

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    const deadline = stateDeadlines.find(d => d.state === state);
    setSelectedDeadline(deadline || null);
    setSearchTerm(state);
    setNoResults(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setNoResults(false);

    if (!value) {
      setSelectedState("");
      setSelectedDeadline(null);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedState("");
    setSelectedDeadline(null);
    setNoResults(false);
  };

  const filteredStates = stateDeadlines.filter(deadline =>
    deadline.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setNoResults(searchTerm.length > 0 && filteredStates.length === 0);
  }, [searchTerm, filteredStates.length]);

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
            </div>
            <div className="flex-1">
              <Select value={selectedState} onValueChange={handleStateSelect}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {filteredStates.map((deadline) => (
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
