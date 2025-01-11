import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, AlertCircle, DollarSign, Briefcase } from "lucide-react";
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
            Estimated Financial Aid Package (Per Academic Year)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-lg text-purple-700 mb-2">Total Estimated Aid</h3>
              <p className="text-3xl font-bold text-purple-600">
                ${estimatedAid.totalAid.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">Per Academic Year</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h3 className="font-semibold text-lg text-green-700 mb-2">
                Federal Pell Grant
              </h3>
              <p className="text-3xl font-bold text-green-600">
                ${estimatedAid.pellGrant.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">Does not need to be repaid</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <h3 className="font-semibold text-lg text-blue-700 mb-2">
                Federal SEOG Grant
              </h3>
              <p className="text-3xl font-bold text-blue-600">
                ${estimatedAid.federalSEOG.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">Supplemental Educational Opportunity Grant</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-lg text-yellow-700 mb-2">
                <span className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Federal Work-Study
                </span>
              </h3>
              <p className="text-3xl font-bold text-yellow-600">
                ${estimatedAid.workStudy.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">Earned through part-time work</p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-orange-200 col-span-full">
              <h3 className="font-semibold text-lg text-orange-700 mb-2">Federal Direct Loans</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Subsidized Loans</p>
                  <p className="text-2xl font-bold text-orange-600">
                    ${estimatedAid.subsidizedLoanLimit.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Government pays interest while in school</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Unsubsidized Loans</p>
                  <p className="text-2xl font-bold text-orange-600">
                    ${estimatedAid.unsubsidizedLoanLimit.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Interest accrues while in school</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <h3 className="font-semibold text-yellow-800">Important Notes & Tips</h3>
            </div>
            <ul className="space-y-2">
              {estimatedAid.suggestions.map((suggestion, index) => (
                <li key={index} className="text-sm text-yellow-700 flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This is an estimate based on the information provided. 
              Actual aid amounts may vary based on your school's cost of attendance, 
              specific circumstances, and available funding. Contact your school's financial 
              aid office for more accurate information.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};