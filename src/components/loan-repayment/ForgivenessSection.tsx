
import React from 'react';

export const ForgivenessSection = () => {
  return (
    <section id="forgiveness" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">How IDR Plans Lead to Loan Forgiveness</h2>
      <div className="prose max-w-none">
        <p>A major perk of IDR plans is loan forgiveness. Here's the process:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>After 20-25 years of qualifying payments (depending on the plan), your remaining balance is forgiven.</li>
          <li>With the SAVE plan, borrowers with smaller loans (e.g., $12,000 or less) may see forgiveness after just 10 years.</li>
        </ul>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="font-semibold">Key Caveat:</p>
          <p>Forgiven amounts may be taxed as income, unless you qualify for Public Service Loan Forgiveness (PSLF), which offers tax-free forgiveness after 10 years for public service workers.</p>
        </div>
        
        <p><strong>Example:</strong> You owe $50,000 and pay $200/month for 25 years under IBR. Any remaining balance is forgiven—but you might owe taxes on it.</p>
      </div>
    </section>
  );
};
