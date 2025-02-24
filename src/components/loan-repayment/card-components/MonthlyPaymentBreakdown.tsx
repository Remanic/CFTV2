
import { TrendingUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatCurrency } from "../utils/formatters";
import type { RepaymentBreakdown } from "../utils/calculations";

interface MonthlyPaymentBreakdownProps {
  monthlyPayment: number;
  monthlyBreakdown: RepaymentBreakdown;
  planName: string;
  getPlanColor: (name: string) => string;
}

export const MonthlyPaymentBreakdown = ({ 
  monthlyPayment, 
  monthlyBreakdown, 
  planName,
  getPlanColor 
}: MonthlyPaymentBreakdownProps) => {
  const principalPercentage = (monthlyBreakdown.principal / monthlyPayment) * 100;
  const interestPercentage = (monthlyBreakdown.interest / monthlyPayment) * 100;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-bold text-black">Monthly Payment</span>
        <div className="flex items-center gap-2">
          {(planName === "Graduated" || planName === "Income-Based") && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center text-xs text-primary">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {planName === "Graduated" ? "Increases every 2 years" : "Adjusts with income"}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{planName === "Graduated" 
                    ? "Payments start lower and increase by 10% every 2 years" 
                    : "Payments are recalculated annually based on your income"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          <span className="text-2xl font-bold text-black">
            {formatCurrency(monthlyPayment)}
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Principal</span>
          <span className="font-medium text-gray-700">
            {formatCurrency(monthlyBreakdown.principal)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Interest</span>
          <span className="font-medium text-gray-700">
            {formatCurrency(monthlyBreakdown.interest)}
          </span>
        </div>
        <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
          <div className="flex h-full">
            <div 
              style={{ 
                width: `${principalPercentage}%`,
                backgroundColor: getPlanColor(planName)
              }}
            />
            <div 
              style={{ 
                width: `${interestPercentage}%`,
                backgroundColor: `${getPlanColor(planName)}80`
              }}
            />
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Principal ({Math.round(principalPercentage)}%)</span>
          <span>Interest ({Math.round(interestPercentage)}%)</span>
        </div>
      </div>
    </div>
  );
};
