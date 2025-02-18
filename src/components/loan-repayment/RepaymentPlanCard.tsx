import { Card } from "@/components/ui/card";
import type { RepaymentPlan } from "./utils/calculations";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, TrendingUp, ArrowUpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RepaymentPlanCardProps {
  plan: RepaymentPlan;
}

export const RepaymentPlanCard = ({ plan }: RepaymentPlanCardProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const principalPercentage = (plan.monthlyBreakdown.principal / plan.monthlyPayment) * 100;
  const interestPercentage = (plan.monthlyBreakdown.interest / plan.monthlyPayment) * 100;
  const totalPrincipalPercentage = ((plan.totalPayment - plan.totalInterest) / plan.totalPayment) * 100;

  const getPlanColor = (planName: string) => {
    switch (planName) {
      case "Standard":
        return "#D3E4FD";
      case "Graduated":
        return "#33C3F0";
      case "Income-Based":
        return "#1EAEDB";
      case "Extended":
        return "#0FA0CE";
      default:
        return "#D3E4FD";
    }
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
          </div>
          {plan.pslf_eligible && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center whitespace-nowrap px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <BadgeCheck className="w-4 h-4 mr-1" />
                    PSLF Eligible
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Qualifies for Public Service Loan Forgiveness</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        <div className="p-4 bg-gray-50 rounded-lg space-y-3 min-h-[180px]">
          <div className="flex justify-between items-baseline">
            <span className="text-sm font-bold text-black">Total Payment</span>
            <span className="text-lg font-bold text-black">{formatCurrency(plan.totalPayment)}</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Principal</span>
              <span className="font-medium text-gray-700">
                {formatCurrency(plan.totalPayment - plan.totalInterest)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Interest</span>
              <span className="font-medium text-gray-700">{formatCurrency(plan.totalInterest)}</span>
            </div>
            <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
              <div 
                className="h-full"
                style={{ 
                  width: `${totalPrincipalPercentage}%`,
                  backgroundColor: getPlanColor(plan.name)
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Principal ({Math.round(totalPrincipalPercentage)}%)</span>
              <span>Interest ({Math.round(100 - totalPrincipalPercentage)}%)</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-baseline">
            <span className="text-sm font-bold text-black">Monthly Payment</span>
            <div className="flex items-center gap-2">
              {(plan.name === "Graduated" || plan.name === "Income-Based") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center text-xs text-primary">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {plan.name === "Graduated" ? "Increases every 2 years" : "Adjusts with income"}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{plan.name === "Graduated" 
                        ? "Payments start lower and increase by 10% every 2 years" 
                        : "Payments are recalculated annually based on your income"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <span className="text-2xl font-bold text-black">
                {formatCurrency(plan.monthlyPayment)}
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Principal</span>
              <span className="font-medium text-gray-700">
                {formatCurrency(plan.monthlyBreakdown.principal)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Interest</span>
              <span className="font-medium text-gray-700">
                {formatCurrency(plan.monthlyBreakdown.interest)}
              </span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="flex h-full">
                <div 
                  style={{ 
                    width: `${principalPercentage}%`,
                    backgroundColor: getPlanColor(plan.name)
                  }}
                />
                <div 
                  style={{ 
                    width: `${interestPercentage}%`,
                    backgroundColor: `${getPlanColor(plan.name)}80`
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Principal ({Math.round(principalPercentage)}%)</span>
              <span>Interest ({Math.round(interestPercentage)}%)</span>
            </div>
          </div>

          {(plan.name === "Graduated" || plan.name === "Income-Based") && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-gray-700">
                  {plan.name === "Graduated" 
                    ? "Payment Progression" 
                    : "Income-Based Adjustment"}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="h-1 rounded-full bg-primary/20"
                    style={{
                      opacity: 0.3 + (i * 0.175),
                      height: `${4 + (i * 2)}px`
                    }}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {plan.name === "Graduated" 
                  ? "Payments increase by 10% every 24 months"
                  : "Payments adjust annually based on income and family size"}
              </p>
            </div>
          )}

          <div className="space-y-1 pt-4 border-t border-gray-100">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Time to Repay</span>
              <span className="font-medium text-gray-700">
                {Math.round(plan.timeToRepay / 12)} years
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
            <ul className="space-y-1">
              {plan.benefits.map((benefit, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Optimization Tips</h4>
            <ul className="space-y-1">
              {plan.optimizationTips.map((tip, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};
