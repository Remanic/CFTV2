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