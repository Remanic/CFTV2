import { useState } from "react";
import { stateDeadlines2025 } from "./data/2025/stateDeadlines";
import { StateDeadline } from "./data/2025/types";
import { SearchInput } from "./components/SearchInput";
import { StateSelector } from "./components/StateSelector";
import { DeadlineDisplay } from "./components/DeadlineDisplay";

export const StateDeadlineFinder2025 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDeadline, setSelectedDeadline] = useState<StateDeadline | null>(null);
  const [noResults, setNoResults] = useState(false);
  const [searchResults, setSearchResults] = useState<StateDeadline[]>([]);

  // Get unique states for the selector
  const uniqueStates = Array.from(new Set(stateDeadlines2025.map(d => d.state))).sort();

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    const deadlines = stateDeadlines2025.filter(d => d.state === state);
    if (deadlines.length > 0) {
      const combinedDeadline: StateDeadline = {
        state: state,
        deadline: deadlines.map(d => d.deadline).join('\n'),
        details: deadlines.map(d => d.details).join('\n\n')
      };
      setSelectedDeadline(combinedDeadline);
    } else {
      setSelectedDeadline(null);
    }
    setNoResults(false);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    
    if (!value.trim()) {
      setSearchResults([]);
      setNoResults(false);
      return;
    }

    const matchingStates = Array.from(
      new Set(
        stateDeadlines2025
          .filter(deadline => 
            deadline.state.toLowerCase().includes(value.toLowerCase())
          )
          .map(d => d.state)
      )
    );

    const combinedResults = matchingStates.map(state => {
      const stateDeadlines = stateDeadlines2025.filter(d => d.state === state);
      return {
        state: state,
        deadline: stateDeadlines.map(d => d.deadline).join('\n'),
        details: stateDeadlines.map(d => d.details).join('\n\n')
      };
    });

    setSearchResults(combinedResults);
    setNoResults(combinedResults.length === 0);
  };

  const handleSearchResultClick = (deadline: StateDeadline) => {
    setSelectedDeadline(deadline);
    setSearchTerm(deadline.state);
    setSelectedState(deadline.state);
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
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <SearchInput
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onClearSearch={clearSearch}
          searchResults={searchResults}
          onResultClick={handleSearchResultClick}
          noResults={noResults}
          showResults={!!searchTerm}
        />
        
        <StateSelector
          selectedState={selectedState}
          onStateSelect={handleStateSelect}
          uniqueStates={uniqueStates}
        />
      </div>

      <DeadlineDisplay selectedDeadline={selectedDeadline} />
    </div>
  );
};
