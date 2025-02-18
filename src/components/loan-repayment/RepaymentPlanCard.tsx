
import { Card } from "@/components/ui/card";
import type { RepaymentPlan } from "./utils/calculations";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck } from "lucide-react";

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

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
          </div>
          {plan.pslf_eligible && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <BadgeCheck className="w-4 h-4 mr-1" />
              PSLF Eligible
            </span>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-medium text-gray-500">Monthly Payment</span>
              <span className="text-2xl font-bold text-gray-900">{formatCurrency(plan.monthlyPayment)}</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Principal</span>
                <span className="font-medium text-gray-700">{formatCurrency(plan.monthlyBreakdown.principal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Interest</span>
                <span className="font-medium text-gray-700">{formatCurrency(plan.monthlyBreakdown.interest)}</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                <div className="flex h-full">
                  <div 
                    className="bg-primary" 
                    style={{ width: `${principalPercentage}%` }}
                  />
                  <div 
                    className="bg-primary/30" 
                    style={{ width: `${interestPercentage}%` }}
                  />
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Principal ({Math.round(principalPercentage)}%)</span>
                <span>Interest ({Math.round(interestPercentage)}%)</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Total Interest</span>
              <span className="font-medium text-gray-700">{formatCurrency(plan.totalInterest)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Total Payment</span>
              <span className="font-medium text-gray-700">{formatCurrency(plan.totalPayment)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Time to Repay</span>
              <span className="font-medium text-gray-700">{Math.round(plan.timeToRepay / 12)} years</span>
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
