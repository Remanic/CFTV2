
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, ExternalLink } from "lucide-react";
import { EligibilityResult } from "./types";

interface EligibilityResultsProps {
  result: EligibilityResult;
  loanType: string;
}

export const EligibilityResults = ({ result, loanType }: EligibilityResultsProps) => {
  return (
    <div className="mt-8 space-y-6">
      {loanType === "private" && (
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
  );
};
