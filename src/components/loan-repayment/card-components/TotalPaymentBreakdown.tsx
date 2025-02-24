
import { formatCurrency } from "../utils/formatters";

interface TotalPaymentBreakdownProps {
  totalPayment: number;
  totalInterest: number;
  planName: string;
  getPlanColor: (name: string) => string;
}

export const TotalPaymentBreakdown = ({ totalPayment, totalInterest, planName, getPlanColor }: TotalPaymentBreakdownProps) => {
  const totalPrincipalPercentage = ((totalPayment - totalInterest) / totalPayment) * 100;

  return (
    <div className="p-4 bg-gray-50 rounded-lg space-y-3 min-h-[180px]">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-bold text-black">Total Payment</span>
        <span className="text-lg font-bold text-black">{formatCurrency(totalPayment)}</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Principal</span>
          <span className="font-medium text-gray-700">
            {formatCurrency(totalPayment - totalInterest)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Interest</span>
          <span className="font-medium text-gray-700">{formatCurrency(totalInterest)}</span>
        </div>
        <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
          <div 
            className="h-full"
            style={{ 
              width: `${totalPrincipalPercentage}%`,
              backgroundColor: getPlanColor(planName)
            }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Principal ({Math.round(totalPrincipalPercentage)}%)</span>
          <span>Interest ({Math.round(100 - totalPrincipalPercentage)}%)</span>
        </div>
      </div>
    </div>
  );
};
