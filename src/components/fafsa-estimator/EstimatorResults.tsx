import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, AlertCircle } from "lucide-react";
import { AidBreakdown } from "./types";

interface EstimatorResultsProps {
  estimatedAid: AidBreakdown | null;
}

export const EstimatorResults = ({ estimatedAid }: EstimatorResultsProps) => {
  if (!estimatedAid) return null;

  return (
    <div className="space-y-6">
      <Card className="bg-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-purple-600" />
            Financial Aid Estimate Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-lg text-purple-700 mb-2">Total Estimated Aid</h3>
              <p className="text-3xl font-bold text-purple-600">
                ${estimatedAid.totalAid.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h3 className="font-semibold text-lg text-green-700 mb-2">Pell Grant</h3>
              <p className="text-3xl font-bold text-green-600">
                ${estimatedAid.pellGrant.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <h3 className="font-semibold text-lg text-blue-700 mb-2">FSEOG Grant</h3>
              <p className="text-3xl font-bold text-blue-600">
                ${estimatedAid.fseogGrant.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-orange-200">
              <h3 className="font-semibold text-lg text-orange-700 mb-2">Federal Direct Loans</h3>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Subsidized Limit:</span> ${estimatedAid.subsidizedLoanLimit.toLocaleString()}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Unsubsidized Limit:</span> ${estimatedAid.unsubsidizedLoanLimit.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <h3 className="font-semibold text-yellow-800">Suggestions & Tips</h3>
            </div>
            <ul className="space-y-2">
              {estimatedAid.suggestions.map((suggestion, index) => (
                <li key={index} className="text-sm text-yellow-700">
                  • {suggestion}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Note: This is an estimate based on the information provided. Actual aid amounts may vary.
            Contact your school's financial aid office for more accurate information.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};