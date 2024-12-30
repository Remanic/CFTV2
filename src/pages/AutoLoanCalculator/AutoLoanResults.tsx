interface BreakdownType {
  principal: number;
  interest: number;
  tax: number;
  total: number;
  carPrice: number;
  salesTax: number;
  downPayment: number;
}

interface AutoLoanResultsProps {
  breakdown: BreakdownType;
}

export const AutoLoanResults = ({ breakdown }: AutoLoanResultsProps) => {
  return (
    <div className="bg-purple-50 p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold text-purple-700">Monthly Payment Breakdown</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-purple-600">Principal & Interest</p>
          <p className="text-3xl font-bold text-purple-700">
            ${(breakdown.principal + breakdown.interest).toFixed(2)}
          </p>
        </div>

        <div className="pt-4 border-t border-purple-200">
          <p className="text-sm text-purple-600">Sales Tax (Monthly)</p>
          <p className="text-xl font-semibold text-purple-700">
            ${breakdown.tax.toFixed(2)}
          </p>
        </div>

        <div className="pt-4 border-t border-purple-200">
          <p className="text-sm text-purple-600">Total Monthly Payment</p>
          <p className="text-3xl font-bold text-purple-700">
            ${breakdown.total.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg mt-6">
          <h3 className="font-semibold text-gray-700 mb-2">Loan Summary</h3>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-gray-600">Vehicle Price:</span>
              <span className="font-medium">${breakdown.carPrice.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-600">Sales Tax:</span>
              <span className="font-medium">${breakdown.salesTax.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-600">Down Payment:</span>
              <span className="font-medium">${breakdown.downPayment.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-600">Down Payment %:</span>
              <span className="font-medium">
                {((breakdown.downPayment / breakdown.carPrice) * 100).toFixed(1)}%
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};