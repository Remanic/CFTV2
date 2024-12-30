import React from 'react';
import { Card } from "@/components/ui/card";
import { SavingsBreakdown } from './SavingsCalculationUtils';

interface SavingsResultsProps {
  breakdown: SavingsBreakdown;
}

export const SavingsResults: React.FC<SavingsResultsProps> = ({ breakdown }) => {
  return (
    <Card className="bg-green-50 p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold text-green-700">Savings Growth Summary</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-green-600">Future Value</p>
          <p className="text-3xl font-bold text-green-700">
            ${breakdown.futureValue.toFixed(2)}
          </p>
        </div>

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

        <div className="pt-4 border-t border-green-200">
          <p className="text-sm text-green-600">After-Tax Future Value</p>
          <p className="text-3xl font-bold text-green-700">
            ${breakdown.afterTaxFutureValue.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg mt-6">
          <h3 className="font-semibold text-gray-700 mb-2">Investment Summary</h3>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-gray-600">Initial Investment:</span>
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
    </Card>
  );
};