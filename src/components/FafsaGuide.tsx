import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Helmet } from "react-helmet";

export const FafsaGuide = () => {
  const navigate = useNavigate();
  
  const handleYearSelect = (year: "2024" | "2025") => {
    navigate(year === "2024" ? "/fafsa-deadline-2024-2025" : "/fafsa-deadline-2025-2026");
  };

  return (
    <>
      <Helmet>
        <title>FAFSA State Deadline Finder | Find Your State's FAFSA Deadlines</title>
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

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Find Your State's FAFSA Deadline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-gray-600 mb-8">
                  Select an academic year to find FAFSA deadlines for your state
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    onClick={() => handleYearSelect("2024")}
                    className="flex items-center gap-2 min-w-[160px]"
                    size="lg"
                  >
                    <Calendar className="h-4 w-4" />
                    2024-2025
                  </Button>
                  <Button
                    onClick={() => handleYearSelect("2025")}
                    className="flex items-center gap-2 min-w-[160px]"
                    size="lg"
                  >
                    <Calendar className="h-4 w-4" />
                    2025-2026
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};