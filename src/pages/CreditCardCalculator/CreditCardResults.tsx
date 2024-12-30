import React from 'react';
import { Card } from "@/components/ui/card";
import { CreditCardBreakdown } from './CreditCardCalculationUtils';

interface CreditCardResultsProps {
  breakdown: CreditCardBreakdown;
}

export const CreditCardResults: React.FC<CreditCardResultsProps> = ({ breakdown }) => {
  return (
    <Card className="bg-pink-50 p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold text-pink-700">Payment Plan Summary</h2>
      
      {breakdown ? (
        <div className="space-y-4">
          <p className="text-sm text-pink-600">Total Monthly Payment</p>
          <p className="text-3xl font-bold text-pink-700">
            ${breakdown.monthlyPayment.toFixed(2)}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-pink-200">
            <div>
              <p className="text-sm text-pink-600">Months to Pay Off</p>
              <p className="text-xl font-semibold text-pink-700">
                {breakdown.monthsToPayoff}
              </p>
            </div>
            <div>
              <p className="text-sm text-pink-600">Total Interest</p>
              <p className="text-xl font-semibold text-pink-700">
                ${breakdown.totalInterest.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-pink-200">
            <p className="text-sm text-pink-600">Total Amount Paid</p>
            <p className="text-3xl font-bold text-pink-700">
              ${breakdown.totalPaid.toFixed(2)}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-gray-700 mb-2">Payment Comparison</h3>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-gray-600">With Minimum Payment Only:</span>
                <span className="font-medium">{breakdown.minimumPaymentMonths} months</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">With Additional Payment:</span>
                <span className="font-medium">{breakdown.monthsToPayoff} months</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Time Saved:</span>
                <span className="font-medium text-green-600">
                  {breakdown.minimumPaymentMonths - breakdown.monthsToPayoff} months
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-pink-600">
            Enter your credit card details and click Calculate to see your payment plan.
          </p>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Credit Card Management Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>Pay more than the minimum payment to reduce interest costs</li>
              <li>Consider balance transfer options for high-interest cards</li>
              <li>Create a budget to avoid accumulating new credit card debt</li>
              <li>Set up automatic payments to avoid missing due dates</li>
              <li>Monitor your credit utilization ratio</li>
            </ul>
          </div>
        </div>
      )}
    </Card>
  );
};