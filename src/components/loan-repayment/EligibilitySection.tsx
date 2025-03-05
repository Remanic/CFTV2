
import React from 'react';

export const EligibilitySection = () => {
  return (
    <section id="eligibility" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Eligibility for IDR Plans</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="mb-4">To qualify for an IDR plan, you need:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Federal Student Loans:</strong> Direct Loans, Stafford Loans, or Consolidation Loans are eligible. Parent PLUS loans qualify for ICR after consolidation.</li>
          <li><strong>Financial Hardship (PAYE and IBR):</strong> Your IDR payment must be less than the standard 10-year plan payment.</li>
        </ul>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
          <p className="font-semibold">Good News:</p>
          <p>SAVE and ICR don't require hardship proof, broadening access.</p>
        </div>
      </div>
    </section>
  );
};
