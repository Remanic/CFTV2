import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, AlertCircle } from "lucide-react";
import { FormFieldTooltip } from "@/components/fafsa-estimator/form-fields/FormFieldTooltip";

interface EligibilityResult {
  eligible: boolean;
  programs: Array<{
    name: string;
    description: string;
    nextSteps: string[];
    eligibilityScore: number;
    requirements: string[];
  }>;
  commonRejectionReasons?: string[];
}

export const EligibilityCheckerTool = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<EligibilityResult | null>(null);
  const [formData, setFormData] = useState({
    loanType: "",
    employment: "",
    employmentYears: "",
    loanBalance: "",
    income: "",
    degree: "",
    paymentsMade: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const checkEligibility = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20;
      });
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);

      const programs = [];
      const commonRejectionReasons = [
        "Missing annual employment certification",
        "Incorrect loan type (only Direct Loans qualify for most forgiveness programs)",
        "Employment not qualifying for full required period",
        "Missing or incorrect payment documentation",
        "Income requirements not met"
      ];

      if (formData.loanType === "private") {
        const privateLoanMessage = (
          <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2" />
              <div>
                <h3 className="font-semibold text-red-800">Private Loans Not Eligible</h3>
                <p className="text-red-700">
                  Private student loans are not eligible for federal forgiveness programs. Consider refinancing options or contact your loan provider for alternative repayment plans.
                </p>
              </div>
            </div>
          </div>
        );
        setResult({
          eligible: false,
          programs,
          commonRejectionReasons,
          privateLoanMessage
        });
        setLoading(false);
        toast({
          title: "Eligibility Check Complete",
          description: "Private loans are not eligible for federal forgiveness programs.",
        });
        return;
      }

      if (formData.employment === "government" || formData.employment === "nonprofit") {
        const employmentYears = parseInt(formData.employmentYears) || 0;
        const paymentsMade = parseInt(formData.paymentsMade) || 0;
        const pslfScore = Math.min(
          ((employmentYears * 12 + paymentsMade) / 120) * 100,
          100
        );

        if (formData.loanType === "direct") {
          programs.push({
            name: "Public Service Loan Forgiveness (PSLF)",
            description: "Based on your public service employment and loan type",
            nextSteps: [
              "Submit PSLF Employment Certification Form",
              "Verify qualifying payment count",
              "Enroll in income-driven repayment plan"
            ],
            eligibilityScore: pslfScore,
            requirements: [
              "Make 120 qualifying monthly payments",
              "Work full-time for a qualifying employer",
              "Have Direct Loans",
              "Be enrolled in a qualifying repayment plan"
            ]
          });
        }
      }

      if (formData.employment === "education" && formData.loanType === "direct") {
        const employmentYears = parseInt(formData.employmentYears) || 0;
        const teacherScore = Math.min((employmentYears / 5) * 100, 100);

        programs.push({
          name: "Teacher Loan Forgiveness",
          description: "For qualified teachers working in low-income schools",
          nextSteps: [
            "Verify school's low-income status",
            "Complete Teacher Loan Forgiveness Application",
            "Gather employment certification"
          ],
          eligibilityScore: teacherScore,
          requirements: [
            "Teach full-time for 5 complete and consecutive years",
            "Work at a qualifying low-income school",
            "Have Direct or FFEL Loans",
            "Meet subject area requirements"
          ]
        });
      }

      const income = parseInt(formData.income) || 0;
      const loanBalance = parseInt(formData.loanBalance) || 0;
      if (income < loanBalance * 0.15) {
        programs.push({
          name: "Income-Driven Repayment Forgiveness",
          description: "Based on your income-to-debt ratio",
          nextSteps: [
            "Apply for Income-Driven Repayment Plan",
            "Submit annual income documentation",
            "Track qualifying payments"
          ],
          eligibilityScore: 75,
          requirements: [
            "Enroll in an IDR plan",
            "Make qualifying payments for 20-25 years",
            "Recertify income annually",
            "Have eligible federal loans"
          ]
        });
      }

      setResult({
        eligible: programs.length > 0,
        programs,
        commonRejectionReasons
      });

      setLoading(false);
      toast({
        title: "Eligibility Check Complete",
        description: programs.length > 0 
          ? "We've found potential programs you may qualify for."
          : "Based on your inputs, you may not qualify for forgiveness programs at this time.",
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
              <div className="flex items-center gap-2">
                <Label htmlFor="loanType">Loan Type</Label>
                <FormFieldTooltip tooltip="Only federal Direct Loans are eligible for most forgiveness programs. Private loans are not eligible for federal forgiveness." />
              </div>
              <Select onValueChange={(value) => handleInputChange("loanType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select loan type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="direct">Direct Loans (Eligible for most programs)</SelectItem>
                  <SelectItem value="ffel">FFEL Loans (Limited eligibility)</SelectItem>
                  <SelectItem value="perkins">Perkins Loans (Limited eligibility)</SelectItem>
                  <SelectItem value="private">Private Loans (Not eligible)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="employment">Employment Type</Label>
                <FormFieldTooltip tooltip="Your employer type affects eligibility for specific forgiveness programs like PSLF" />
              </div>
              <Select onValueChange={(value) => handleInputChange("employment", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="government">Government</SelectItem>
                  <SelectItem value="nonprofit">Non-Profit 501(c)(3)</SelectItem>
                  <SelectItem value="education">Education (Teaching)</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="private">Private Sector</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="employmentYears">Years at Current Employment</Label>
                <FormFieldTooltip tooltip="Enter the number of full years you've worked at your qualifying employer" />
              </div>
              <Input 
                type="number" 
                id="employmentYears" 
                placeholder="Enter years"
                onChange={(e) => handleInputChange("employmentYears", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="paymentsMade">Qualifying Payments Made</Label>
                <FormFieldTooltip tooltip="Number of qualifying monthly payments made while working for an eligible employer" />
              </div>
              <Input 
                type="number" 
                id="paymentsMade" 
                placeholder="Enter number of payments"
                onChange={(e) => handleInputChange("paymentsMade", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="loanBalance">Current Loan Balance</Label>
                <FormFieldTooltip tooltip="Enter your total federal student loan balance in dollars" />
              </div>
              <Input 
                type="number" 
                id="loanBalance" 
                placeholder="Enter amount in dollars"
                onChange={(e) => handleInputChange("loanBalance", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="income">Annual Income</Label>
                <FormFieldTooltip tooltip="Enter your gross annual income (before taxes) in dollars" />
              </div>
              <Input 
                type="number" 
                id="income" 
                placeholder="Enter yearly income in dollars"
                onChange={(e) => handleInputChange("income", e.target.value)}
              />
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
            {formData.loanType === "private" && (
              <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-semibold text-red-800">Private Loans Not Eligible</h3>
                    <p className="text-red-700">
                      Private student loans are not eligible for federal forgiveness programs. Consider refinancing options or contact your loan provider for alternative repayment plans.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {result.programs.length > 0 ? (
              result.programs.map((program, index) => (
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
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {program.requirements.map((req, idx) => (
                            <li key={idx} className="text-gray-600">{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Next Steps:</h4>
                        <ul className="space-y-2">
                          {program.nextSteps.map((step, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <span className="mr-2">•</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">
                  No Eligible Programs Found
                </h3>
                <p className="text-yellow-700 mb-4">
                  Based on your current information, you may not qualify for loan forgiveness programs at this time.
                </p>
              </div>
            )}

            {result.commonRejectionReasons && (
              <div className="bg-gray-50 rounded-lg p-6 mt-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-gray-600" />
                  Important Factors That May Affect Your Eligibility
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-3">
                    To avoid common rejection reasons, ensure you meet these key requirements:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-600">
                      <span className="font-semibold mr-2">1.</span>
                      <span>
                        <strong>Loan Type Requirements:</strong> Only Direct Loans qualify for most forgiveness programs. 
                        FFEL and Perkins Loans must be consolidated into Direct Loans first.
                      </span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="font-semibold mr-2">2.</span>
                      <span>
                        <strong>Employment Certification:</strong> Submit the Employment Certification Form annually 
                        and keep detailed records of your qualifying employment.
                      </span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="font-semibold mr-2">3.</span>
                      <span>
                        <strong>Payment Documentation:</strong> Ensure all qualifying payments are properly documented 
                        and made under an eligible repayment plan.
                      </span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="font-semibold mr-2">4.</span>
                      <span>
                        <strong>Employment Duration:</strong> Maintain continuous qualifying employment for the 
                        required period (varies by program).
                      </span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="font-semibold mr-2">5.</span>
                      <span>
                        <strong>Income Requirements:</strong> Keep your income documentation current and accurate, 
                        recertifying annually for income-driven repayment plans.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

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
