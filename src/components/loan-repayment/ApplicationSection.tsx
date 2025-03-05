
export const ApplicationSection = () => {
  return (
    <section id="how-to-apply" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">How to Apply for an IDR Plan</h2>
      <div className="prose max-w-none">
        <p>Applying is free and simple. Here's how:</p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li><strong>Go to StudentAid.gov:</strong> Log in with your FSA ID.</li>
          <li><strong>Pick a Plan:</strong> Choose SAVE, PAYE, IBR, or ICR.</li>
          <li><strong>Submit Income Data:</strong> Provide your adjusted gross income (AGI) and family size via tax returns or the IRS Data Retrieval Tool.</li>
          <li><strong>Recertify Yearly:</strong> Update your income and family size annually to remain enrolled.</li>
        </ol>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="font-semibold">Pro Tip:</p>
          <p>Recertify early—missing the deadline can increase payments or capitalize unpaid interest.</p>
        </div>
      </div>
    </section>
  );
};
