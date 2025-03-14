
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Calendar, Search } from "lucide-react";
import { StateDeadlineFinder } from "./StateDeadlineFinder";
import { StateDeadlineFinder2025 } from "./StateDeadlineFinder2025";

export const StateDeadlineFinderTool = () => {
  const [selectedYear, setSelectedYear] = useState<"2024" | "2025">("2024");

  const handleYearSelect = (year: "2024" | "2025") => {
    setSelectedYear(year);
  };

  return (
    <>
      <Helmet>
        <title>FAFSA State Deadline Finder Tool | Find Your State's FAFSA Deadlines</title>
        <meta 
          name="description" 
          content="Find FAFSA deadlines for your state for 2024-2025 and 2025-2026 academic years. Easy-to-use tool to check state-specific FAFSA submission deadlines and requirements."
        />
      </Helmet>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Search className="h-6 w-6 text-blue-600" />
            Find Your State's FAFSA Deadline
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Select an academic year to find FAFSA deadlines for your state
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant={selectedYear === "2024" ? "default" : "outline"}
                onClick={() => handleYearSelect("2024")}
                className="flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                2024-2025
              </Button>
              <Button
                variant={selectedYear === "2025" ? "default" : "outline"}
                onClick={() => handleYearSelect("2025")}
                className="flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                2025-2026
              </Button>
            </div>
          </div>
          
          {/* Display the appropriate finder component based on selected year */}
          <div className="mt-8">
            {selectedYear === "2024" ? <StateDeadlineFinder /> : <StateDeadlineFinder2025 />}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
