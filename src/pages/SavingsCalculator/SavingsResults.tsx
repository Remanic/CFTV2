import React from 'react';
import { Card } from "@/components/ui/card";
import { SavingsBreakdown } from './SavingsCalculationUtils';

interface SavingsResultsProps {
  breakdown: SavingsBreakdown;
}

export const SavingsResults: React.FC<SavingsResultsProps> = ({ breakdown }) => {
  return (
    <Card className="bg-green-50 p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold text-green-700">Savings Projection</h2>
      
      {breakdown ? (
        <div className="space-y-4">
          <p className="text-sm text-green-600">Projected Savings Amount</p>
          <p className="text-3xl font-bold text-green-700">
            ${breakdown.futureValue.toFixed(2)}
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-green-200">
            <div>
              <p className="text-sm text-green-600">Total Contributions</p>
              <p className="text-xl font-semibold text-green-700">
                ${breakdown.totalContributions.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-green-600">Total Interest Earned</p>
              <p className="text-xl font-semibold text-green-700">
                ${breakdown.totalInterest.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-gray-700 mb-2">Savings Summary</h3>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-gray-600">Initial Deposit:</span>
                <span className="font-medium">${breakdown.initialDeposit.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Monthly Contribution:</span>
                <span className="font-medium">${breakdown.monthlyContribution.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Annual Return Rate:</span>
                <span className="font-medium">{breakdown.annualReturn}%</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Investment Period:</span>
                <span className="font-medium">{breakdown.years} years</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-green-600">
            Enter your savings details and click Calculate to see your projected savings growth.
          </p>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Savings Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>Start saving early to benefit from compound interest</li>
              <li>Consider inflation when planning long-term savings</li>
              <li>Diversify your savings across different investment options</li>
              <li>Set up automatic monthly contributions</li>
              <li>Review and adjust your savings strategy periodically</li>
            </ul>
          </div>
        </div>
      )}
    </Card>
  );
};