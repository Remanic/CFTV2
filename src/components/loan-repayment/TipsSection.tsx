
export const TipsSection = () => {
  return (
    <section id="tips-and-hacks" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Strategies for Success with IDR Plans</h2>
      <div className="prose max-w-none">
        <p>Maximize IDR benefits with these tips:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Select Wisely:</strong> Use the Loan Simulator to pick the plan with the lowest payment and fastest forgiveness.</li>
          <li><strong>Stay on Top of Recertification:</strong> Set annual reminders to update your info.</li>
          <li><strong>Plan for Taxes:</strong> Save for potential tax liabilities on forgiven amounts (unless pursuing PSLF).</li>
          <li><strong>Leverage PSLF:</strong> Public service workers can pair IDR with PSLF for tax-free forgiveness after 10 years.</li>
        </ul>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <p className="font-semibold">Insight:</p>
          <p>PSLF accelerates forgiveness for eligible borrowers.</p>
        </div>
      </div>
    </section>
  );
};
