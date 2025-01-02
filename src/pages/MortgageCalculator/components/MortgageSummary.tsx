import { Card } from "@/components/ui/card";

interface MortgageSummaryProps {
  breakdown: {
    principal: number;
    interest: number;
    tax: number;
    insurance: number;
    total: number;
  } | null;
  loanDetails: {
    homePrice: number;
    downPayment: number;
    interestRate: number;
    loanTerm: number;
  } | null;
}

export const MortgageSummary = ({ breakdown, loanDetails }: MortgageSummaryProps) => {
  if (!breakdown || !loanDetails) {
    return (
      <div className="bg-orange-50 p-6 rounded-lg space-y-4">
        <p className="text-orange-600">
          Enter your mortgage details and click Calculate to see your estimated monthly payments.
        </p>
        <Card className="bg-white p-4">
          <h3 className="font-semibold text-gray-700 mb-2">Tips for Better Decision Making</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
            <li>A higher down payment reduces your monthly payments and total interest</li>
            <li>Consider property taxes and insurance in your budget planning</li>
            <li>Shorter loan terms mean higher monthly payments but less total interest</li>
            <li>Compare different down payment amounts to find your sweet spot</li>
          </ul>
        </Card>
      </div>
    );
  }

  const totalPayments = breakdown.total * (loanDetails.loanTerm * 12);
  const totalInterest = totalPayments - (loanDetails.homePrice - loanDetails.downPayment);
  const loanToValue = ((loanDetails.homePrice - loanDetails.downPayment) / loanDetails.homePrice) * 100;

  return (
    <div className="bg-orange-50 p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold text-orange-700">Monthly Payment Breakdown</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-orange-600">Principal & Interest</p>
          <p className="text-3xl font-bold text-orange-700">
            ${(breakdown.principal + breakdown.interest).toFixed(2)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-orange-200">
          <div>
            <p className="text-sm text-orange-600">Property Tax</p>
            <p className="text-xl font-semibold text-orange-700">
              ${breakdown.tax.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-sm text-orange-600">Insurance</p>
            <p className="text-xl font-semibold text-orange-700">
              ${breakdown.insurance.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-orange-200">
          <p className="text-sm text-orange-600">Total Monthly Payment</p>
          <p className="text-3xl font-bold text-orange-700">
            ${breakdown.total.toFixed(2)}
          </p>
        </div>

        <Card className="bg-white p-4 space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Loan Summary</h3>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-gray-600">Loan Amount:</span>
                <span className="font-medium">${(loanDetails.homePrice - loanDetails.downPayment).toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Down Payment:</span>
                <span className="font-medium">${loanDetails.downPayment.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Down Payment %:</span>
                <span className="font-medium">{((loanDetails.downPayment / loanDetails.homePrice) * 100).toFixed(1)}%</span>
              </p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-semibold text-gray-700 mb-2">Total Cost Analysis</h3>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-gray-600">Total Amount Paid:</span>
                <span className="font-medium">${totalPayments.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Total Interest Paid:</span>
                <span className="font-medium">${totalInterest.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Loan to Value Ratio:</span>
                <span className="font-medium">{loanToValue.toFixed(1)}%</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};