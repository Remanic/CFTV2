import React from 'react';
import { Card } from "@/components/ui/card";
import { EMIBreakdown } from './EMICalculationUtils';

interface EMIResultsProps {
  breakdown: EMIBreakdown;
}

export const EMIResults: React.FC<EMIResultsProps> = ({ breakdown }) => {
  return (
    <Card className="bg-indigo-50 p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold text-indigo-700">Monthly Payment Breakdown</h2>
      
      {breakdown ? (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-indigo-600">Monthly EMI Payment</p>
            <p className="text-3xl font-bold text-indigo-700">
              ${breakdown.monthlyEMI.toFixed(2)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-indigo-200">
            <div>
              <p className="text-sm text-indigo-600">Total Interest</p>
              <p className="text-xl font-semibold text-indigo-700">
                ${breakdown.totalInterest.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-indigo-600">Processing Fee</p>
              <p className="text-xl font-semibold text-indigo-700">
                ${breakdown.processingFee.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-indigo-200">
            <p className="text-sm text-indigo-600">Total Amount Payable</p>
            <p className="text-3xl font-bold text-indigo-700">
              ${breakdown.totalAmount.toFixed(2)}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-gray-700 mb-2">Loan Summary</h3>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-gray-600">Principal Amount:</span>
                <span className="font-medium">${breakdown.principal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Interest Rate (p.a.):</span>
                <span className="font-medium">{breakdown.interestRate}%</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Loan Term:</span>
                <span className="font-medium">{breakdown.loanTerm} months</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Processing Fee Rate:</span>
                <span className="font-medium">{(breakdown.processingFee / breakdown.principal * 100).toFixed(2)}%</span>
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Payment Schedule</h3>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-gray-600">First Payment Due:</span>
                <span className="font-medium">Next month</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Last Payment:</span>
                <span className="font-medium">In {breakdown.loanTerm} months</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Payment Frequency:</span>
                <span className="font-medium">Monthly</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-indigo-600">
            Enter your loan details and click Calculate to see your EMI breakdown.
          </p>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">EMI Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>A higher down payment can significantly reduce your monthly EMI</li>
              <li>Consider all fees and charges before finalizing your loan</li>
              <li>Compare different loan terms to find the best balance between EMI and total interest</li>
              <li>Check processing fees before finalizing the loan</li>
              <li>Maintain a good credit score for better interest rates</li>
            </ul>
          </div>
        </div>
      )}
    </Card>
  );
};