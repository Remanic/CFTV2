import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { EligibilityForm } from "./EligibilityForm";
import { EligibilityResults } from "./EligibilityResults";
import { EligibilityResult, FormData } from "./types";

export const EligibilityCheckerTool = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<EligibilityResult | null>(null);
  const [formData, setFormData] = useState<FormData>({
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
        setResult({
          eligible: false,
          programs,
          commonRejectionReasons
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
        <EligibilityForm
          formData={formData}
          loading={loading}
          progress={progress}
          onSubmit={checkEligibility}
          onInputChange={handleInputChange}
        />
        {result && <EligibilityResults result={result} loanType={formData.loanType} />}
      </CardContent>
    </Card>
  );
};
