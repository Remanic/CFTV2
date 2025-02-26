
import React from "react";

export const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Why Choose the Extended Repayment Plan?</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <ul className="space-y-4">
          <li className="flex items-start gap-2">
            <span className="font-semibold">Lower Monthly Payments:</span>
            <span>By extending the repayment term, your monthly payments are smaller, making them easier to manage.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold">Payment Flexibility:</span>
            <span>Choose between fixed payments (same amount each month) or graduated payments (start low and increase every two years).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold">No Income Requirement:</span>
            <span>Unlike IDR plans, your income doesn't affect your eligibility or payment amount.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold">Longer Repayment Term:</span>
            <span>Up to 25 years, giving you more time to pay off your loans.</span>
          </li>
        </ul>
        <p className="mt-4">
          This plan is especially helpful if you have a high loan balance and need breathing room in your budget but don't want to commit to an IDR plan.
        </p>
      </div>
    </section>
  );
};
