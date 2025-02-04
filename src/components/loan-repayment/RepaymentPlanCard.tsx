
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PiggyBank, TrendingUp, DollarSign, Calculator, Award, Lightbulb } from "lucide-react";

interface RepaymentPlan {
  name: string;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  timeToRepay: number;
  description: string;
  popularity: number;
  benefits: string[];
  pslf_eligible: boolean;
  optimizationTips: string[];
}

interface RepaymentPlanCardProps {
  plan: RepaymentPlan;
}

export const RepaymentPlanCard = ({ plan }: RepaymentPlanCardProps) => {
  const getPlanIcon = (name: string) => {
    switch (name) {
      case "Standard":
        return <PiggyBank className="h-5 w-5 text-primary" />;
      case "Graduated":
        return <TrendingUp className="h-5 w-5 text-primary" />;
      case "Extended":
        return <DollarSign className="h-5 w-5 text-primary" />;
      case "Income-Based":
        return <Calculator className="h-5 w-5 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            {getPlanIcon(plan.name)}
            {plan.name}
            {plan.pslf_eligible && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Award className="h-4 w-4 text-green-500 ml-1" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Eligible for Public Service Loan Forgiveness</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </h3>
          <span className="text-sm text-gray-500">{plan.popularity}% choose this</span>
        </div>

        <p className="text-sm text-gray-600">{plan.description}</p>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Monthly Payment</p>
            <p className="text-2xl font-bold text-primary">
              ${Math.round(plan.monthlyPayment).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Payment</p>
            <p className="text-lg font-semibold text-primary">
              ${Math.round(plan.totalPayment).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Interest</p>
            <p className="text-lg font-semibold text-primary">
              ${Math.round(plan.totalInterest).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Time to Repay</p>
            <p className="text-lg font-semibold text-primary">
              {Math.round(plan.timeToRepay / 12)} years
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Benefits:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {plan.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            Optimization Tips:
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            {plan.optimizationTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
