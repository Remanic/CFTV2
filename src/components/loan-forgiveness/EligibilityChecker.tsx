import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

interface EligibilityResult {
  eligible: boolean;
  programs: string[];
  nextSteps: string[];
}

export const EligibilityChecker = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulated eligibility check
    setTimeout(() => {
      setResult({
        eligible: true,
        programs: ["Public Service Loan Forgiveness", "Income-Driven Repayment Forgiveness"],
        nextSteps: [
          "Submit Employment Certification Form",
          "Consolidate loans if needed",
          "Enroll in income-driven repayment plan"
        ]
      });
      setLoading(false);
      toast({
        title: "Eligibility Check Complete",
        description: "We've analyzed your information and found potential programs.",
      });
    }, 1500);
  };

  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Check Your Eligibility
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={checkEligibility} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="loanType">Loan Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select loan type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="direct">Direct Loans</SelectItem>
                  <SelectItem value="ffel">FFEL Loans</SelectItem>
                  <SelectItem value="perkins">Perkins Loans</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="employment">Employment Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="government">Government</SelectItem>
                  <SelectItem value="nonprofit">Non-Profit</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="private">Private Sector</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="loanBalance">Current Loan Balance</Label>
              <Input type="number" id="loanBalance" placeholder="Enter amount" />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Checking eligibility..." : "Check Eligibility"}
          </Button>
        </form>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800">
                You may be eligible for:
              </h4>
              <ul className="mt-2 space-y-1">
                {result.programs.map((program, index) => (
                  <li key={index} className="text-green-700">
                    • {program}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Next Steps:</h4>
              <ul className="space-y-1">
                {result.nextSteps.map((step, index) => (
                  <li key={index} className="text-gray-600">
                    {index + 1}. {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};