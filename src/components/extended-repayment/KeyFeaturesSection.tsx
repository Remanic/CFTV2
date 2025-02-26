
import React from "react";

export const KeyFeaturesSection = () => {
  return (
    <section id="key-features" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Key Features of the Extended Repayment Plan</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <ul className="space-y-4">
          <li>
            <span className="font-semibold">Repayment Term:</span> Up to 25 years for borrowers with more than $30,000 in federal student loans.
          </li>
          <li>
            <span className="font-semibold">Payment Options:</span>
            <ul className="ml-6 mt-2 space-y-2">
              <li>Fixed Payments: Equal monthly payments for the entire repayment term.</li>
              <li>Graduated Payments: Payments start low and increase every two years.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Eligibility:</span> Available to borrowers with Direct Loans or FFEL Program Loans who owe more than $30,000.
          </li>
          <li>
            <span className="font-semibold">Interest Costs:</span> You'll pay more in total interest over the extended term compared to shorter plans.
          </li>
          <li>
            <span className="font-semibold">No Income Verification:</span> Your payment amount is based on your loan balance, interest rate, and chosen term—not your income.
          </li>
        </ul>
        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800">
            <span className="font-semibold">Tip:</span> Use the Federal Student Aid Loan Simulator to estimate your payments and total interest under both fixed and graduated options.
          </p>
        </div>
      </div>
    </section>
  );
};
