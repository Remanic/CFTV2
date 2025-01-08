import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Calendar, Search } from "lucide-react";

export const StateDeadlineFinderTool = () => {
  const [selectedYear, setSelectedYear] = useState<"2024" | "2025">("2024");
  const navigate = useNavigate();

  const handleYearSelect = (year: "2024" | "2025") => {
    setSelectedYear(year);
    navigate(year === "2024" ? "/fafsa-deadline-2024-2025" : "/fafsa-deadline-2025-2026");
  };

  return (
    <>
      <Helmet>
        <title>FAFSA State Deadline Finder Tool | Find Your State's FAFSA Deadlines</title>
        <meta 
          name="description" 
          content="Find FAFSA deadlines for your state for 2024-2025 and 2025-2026 academic years. Easy-to-use tool to check state-specific FAFSA submission deadlines and requirements."
        />
        <meta 
          name="keywords" 
          content="FAFSA deadlines, state FAFSA deadline, FAFSA 2024-2025, FAFSA 2025-2026, financial aid deadlines, college application deadlines"
        />
        <link rel="canonical" href="https://yourwebsite.com/fafsa-state-deadline-finder" />
      </Helmet>

      <Card className="w-full max-w-4xl mx-auto">
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

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Why Check State Deadlines?</h3>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>State deadlines may differ from federal deadlines</li>
              <li>Early submission increases chances for maximum aid</li>
              <li>Some states award aid on a first-come, first-served basis</li>
              <li>Different programs within states may have varying deadlines</li>
            </ul>
          </div>

          <div className="text-sm text-gray-500 text-center">
            <p>Data is regularly updated to ensure accuracy. Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};