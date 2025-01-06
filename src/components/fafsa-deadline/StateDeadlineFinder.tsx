import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StateDeadline {
  state: string;
  deadline: string;
  details: string;
}

const stateDeadlines: StateDeadline[] = [
  {
    state: "Alabama",
    deadline: "Contact Your Financial Aid Office",
    details: "Check with the financial aid office at the college or career school you plan to attend for information on available state aid and deadlines. Additional forms may be required."
  },
  {
    state: "Alaska",
    deadline: "Multiple Deadlines",
    details: "Alaska Education Grant: Apply as soon as possible after Dec. 31, 2023. Awards made until funds are depleted.\n\nAlaska Performance Scholarship: For priority consideration, submit your application by June 30, 2024. Awards are made until all funds are depleted."
  },
  {
    state: "Arizona",
    deadline: "Contact Your Financial Aid Office",
    details: "Check with the financial aid office at the college or career school you plan to attend for information on available aid and deadlines. Additional forms may be required."
  },
  {
    state: "Arkansas",
    deadline: "Multiple Deadlines",
    details: "Academic Challenge: For consideration, submit your application before July 1, 2024, midnight Central time (CT).\n\nArkansas Future Grant: There are two term applications available. To be considered for the fall term application, apply before July 1, 2024, midnight CT. For the spring term application, apply by Jan. 10, 2025, midnight CT."
  },
  {
    state: "California",
    deadline: "Multiple Deadlines",
    details: "State Financial Aid Programs: For most state financial aid programs, submit your application no later than May 2, 2024 (date postmarked).\n\nCal Grant: Cal Grant requires submission of a school-certified GPA by March 4, 2024. For additional community college Cal Grants, apply by Sept. 3, 2024 (date postmarked)."
  },
  {
    state: "Colorado",
    deadline: "Contact Your Financial Aid Office",
    details: "Check with the financial aid office at the college or career school you plan to attend for information on available state aid and deadlines. Additional forms may be required."
  },
  {
    state: "Connecticut",
    deadline: "March 15, 2024",
    details: "For priority consideration, submit your application by March 15, 2024, by midnight Central time. Contact your state agency or the financial aid office at the college or career school you plan to attend. Additional forms may be required."
  },
  {
    state: "Delaware",
    deadline: "May 15, 2024",
    details: "Submit your application by May 15, 2024, by midnight Central time."
  },
  {
    state: "Florida",
    deadline: "May 15, 2024",
    details: "Submit your application by May 15, 2024 (date processed)."
  },
  {
    state: "Georgia",
    deadline: "ASAP After Dec. 31, 2023",
    details: "Apply as soon as possible after Dec. 31, 2023. Check with the financial aid office at the college or career school you plan to attend. Additional forms may be required. Visit GAfutures.org for additional information."
  },
  {
    state: "Hawaii",
    deadline: "Contact Your Financial Aid Office",
    details: "Check with the financial aid office at the college or career school you plan to attend for information on available state aid and deadlines. Additional forms may be required."
  },
  {
    state: "Idaho",
    deadline: "March 1, 2024",
    details: "Opportunity Scholarship: For consideration, submit your application by March 1, 2024, midnight Central time. Additional forms may be required."
  },
  {
    state: "Illinois",
    deadline: "ASAP After Oct. 1, 2022",
    details: "Monetary Award Program (MAP): Apply as soon as possible after Oct. 1, 2022. Visit isac.org for the MAP deadlines. Awards are made until all funds are depleted."
  },
  {
    state: "Indiana",
    deadline: "Multiple Deadlines",
    details: "Adult Student Grant: Apply as soon as possible after Dec. 31, 2023. Awards are made until all funds are depleted.\n\nFrank O'Bannon Grant and 21st Century Scholarship: Submit your application by April 15, 2024, midnight Central time (CT)."
  },
  {
    state: "Iowa",
    deadline: "July 1, 2024",
    details: "Submit your application by July 1, 2024, midnight Central time. Earlier priority deadlines may exist for certain programs."
  },
  // ... Add all other states similarly
];

export const StateDeadlineFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDeadline, setSelectedDeadline] = useState<StateDeadline | null>(null);

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    const deadline = stateDeadlines.find(d => d.state === state);
    setSelectedDeadline(deadline || null);
  };

  const filteredStates = stateDeadlines.filter(deadline =>
    deadline.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
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