
import React from "react";

export const IsItRightSection = () => {
  return (
    <section id="is-it-right" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Is the Extended Repayment Plan Right for You?</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="mb-4">Consider the Extended Repayment Plan if:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>You have more than $30,000 in federal student loans</li>
          <li>You need lower monthly payments but don't qualify for or prefer not to use an IDR plan</li>
          <li>You want the flexibility of fixed or graduated payments</li>
          <li>You're not seeking loan forgiveness</li>
        </ul>
        <p>However, if you can afford higher payments and want to save on interest, the Standard Repayment Plan might be a better fit.</p>
      </div>
    </section>
  );
};
