import React from 'react';
import { Card } from "@/components/ui/card";
import { MortgageBreakdown } from './MortgageCalculationUtils';

interface MortgageResultsProps {
  breakdown: MortgageBreakdown | null;
  homePrice: number;
  downPayment: number;
}

export const MortgageResults: React.FC<MortgageResultsProps> = ({ 
  breakdown, 
  homePrice, 
  downPayment 
}) => {
  if (!breakdown) return null;

  return (
    <Card className="bg-orange-50 p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold text-orange-700">Monthly Payment Breakdown</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-orange-600">Principal & Interest</p>
          <p className="text-3xl font-bold text-orange-700">
            ${(breakdown.principal + breakdown.interest).toFixed(2)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-orange-200">
          <div>
            <p className="text-sm text-orange-600">Property Tax</p>
            <p className="text-xl font-semibold text-orange-700">
              ${breakdown.tax.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-sm text-orange-600">Insurance</p>
            <p className="text-xl font-semibold text-orange-700">
              ${breakdown.insurance.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-orange-200">
          <p className="text-sm text-orange-600">Total Monthly Payment</p>
          <p className="text-3xl font-bold text-orange-700">
            ${breakdown.total.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg mt-6">
          <h3 className="font-semibold text-gray-700 mb-2">Loan Summary</h3>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-gray-600">Loan Amount:</span>
              <span className="font-medium">${(homePrice - downPayment).toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-600">Down Payment:</span>
              <span className="font-medium">${downPayment.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-600">Down Payment %:</span>
              <span className="font-medium">
                {((downPayment / homePrice) * 100).toFixed(1)}%
              </span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};