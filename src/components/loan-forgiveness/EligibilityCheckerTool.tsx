import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { ExternalLink } from "lucide-react";

interface EligibilityResult {
  eligible: boolean;
  programs: Array<{
    name: string;
    description: string;
    nextSteps: string[];
    eligibilityScore: number;
  }>;
}

export const EligibilityCheckerTool = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const checkEligibility = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setProgress(0);

    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20;
      });
    }, 500);

    // Simulated API check
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setResult({
        eligible: true,
        programs: [
          {
            name: "Public Service Loan Forgiveness (PSLF)",
            description: "Based on your employment history and loan type",
            nextSteps: [
              "Submit Employment Certification Form",
              "Verify qualifying payment count",
              "Enroll in income-driven repayment plan"
            ],
            eligibilityScore: 85
          },
          {
            name: "Income-Driven Repayment Forgiveness",
            description: "Based on your income and family size",
            nextSteps: [
              "Complete IDR plan request",
              "Submit income documentation",
              "Review payment options"
            ],
            eligibilityScore: 92
          }
        ]
      });
      setLoading(false);
      toast({
        title: "Eligibility Check Complete",
        description: "We've found potential programs you may qualify for.",
      });
    }, 3000);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Student Loan Forgiveness Eligibility Checker
        </CardTitle>
        <CardDescription>
          Find out if you qualify for loan forgiveness programs in just a few minutes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={checkEligibility} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="loanType">Loan Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select loan type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="direct">Direct Loans</SelectItem>
                  <SelectItem value="ffel">FFEL Loans</SelectItem>
                  <SelectItem value="perkins">Perkins Loans</SelectItem>
                  <SelectItem value="private">Private Loans</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employment">Employment Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="government">Government</SelectItem>
                  <SelectItem value="nonprofit">Non-Profit</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="private">Private Sector</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="loanBalance">Current Loan Balance</Label>
              <Input type="number" id="loanBalance" placeholder="Enter amount" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="income">Annual Income</Label>
              <Input type="number" id="income" placeholder="Enter annual income" />
            </div>
          </div>

          {loading && (
            <div className="space-y-2">
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-gray-500 text-center">Analyzing your information...</p>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Checking eligibility..." : "Check My Eligibility"}
          </Button>
        </form>

        {result && (
          <div className="mt-8 space-y-6">
            {result.programs.map((program, index) => (
              <Card key={index} className="border-2 border-green-100">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{program.name}</h3>
                      <p className="text-gray-600">{program.description}</p>
                    </div>
                    <div className="bg-green-50 px-3 py-1 rounded-full">
                      <span className="text-green-700 font-medium">{program.eligibilityScore}% Match</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-800">Next Steps:</h4>
                    <ul className="space-y-2">
                      {program.nextSteps.map((step, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="mr-2">•</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-center">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://studentaid.gov" target="_blank" rel="noopener noreferrer">
                  Continue on StudentAid.gov
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};