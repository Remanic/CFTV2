
import React from 'react';

export const PitfallsSection = () => {
  return (
    <section id="pitfalls" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Common Pitfalls of IDR Plans</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="mb-4">IDR plans have drawbacks to watch for:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Longer Repayment:</strong> Extending payments to 20-25 years raises total interest paid.</li>
          <li><strong>Taxable Forgiveness:</strong> Forgiven amounts may trigger a tax bill (except with PSLF).</li>
          <li><strong>Recertification Risks:</strong> Forgetting to recertify can spike payments or add interest to your principal.</li>
        </ul>
        <p><strong>Example:</strong> Miss recertification, and your $100/month payment could jump to $400, with interest piling onto your balance.</p>
      </div>
    </section>
  );
};
