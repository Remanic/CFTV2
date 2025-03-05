
import React from 'react';

export const ExampleSection = () => {
  return (
    <section id="example" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">IDR Plans and Forgiveness: A Real-World Example</h2>
      <div className="bg-blue-50 p-6 rounded-lg">
        <p className="mb-4">Imagine you owe $40,000 at 5% interest, earn $45,000 annually, and have a family of one:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Standard Plan:</strong> $425/month for 10 years.</li>
          <li><strong>SAVE Plan:</strong> $125/month (5% of discretionary income).</li>
          <li><strong>Forgiveness:</strong> After 25 years, remaining debt is forgiven (possibly taxable).</li>
        </ul>
        <p>Here, SAVE slashes your payment by 70%, offering relief now and forgiveness later.</p>
      </div>
    </section>
  );
};
