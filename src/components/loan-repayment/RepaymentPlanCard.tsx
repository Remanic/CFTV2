
import { Card } from "@/components/ui/card";
import type { RepaymentPlan } from "./utils/calculations";
import { BadgeCheck } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TotalPaymentBreakdown } from "./card-components/TotalPaymentBreakdown";
import { MonthlyPaymentBreakdown } from "./card-components/MonthlyPaymentBreakdown";
import { PaymentProgression } from "./card-components/PaymentProgression";
import { formatCurrency } from "./utils/formatters";

interface RepaymentPlanCardProps {
  plan: RepaymentPlan;
}

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

export const RepaymentPlanCard = ({ plan }: RepaymentPlanCardProps) => {
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

        <TotalPaymentBreakdown
          totalPayment={plan.totalPayment}
          totalInterest={plan.totalInterest}
          planName={plan.name}
          getPlanColor={getPlanColor}
        />

        <div className="space-y-4">
          <MonthlyPaymentBreakdown
            monthlyPayment={plan.monthlyPayment}
            monthlyBreakdown={plan.monthlyBreakdown}
            planName={plan.name}
            getPlanColor={getPlanColor}
          />

          {(plan.name === "Graduated" || plan.name === "Income-Based") && (
            <PaymentProgression planName={plan.name} />
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
