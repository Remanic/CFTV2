
export const ApplicationSection = () => {
  return (
    <section id="how-to-apply" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">How to Apply for an IDR Plan</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <ol className="list-decimal pl-6 space-y-4">
          <li><span className="font-semibold">Go Online:</span> Visit StudentAid.gov and log in.</li>
          <li><span className="font-semibold">Select a Plan:</span> Choose from SAVE, PAYE, IBR, or ICR based on your needs.</li>
          <li><span className="font-semibold">Submit Info:</span> Provide your income and family size details.</li>
          <li><span className="font-semibold">Recertify Annually:</span> Update your info each year to maintain eligibility.</li>
        </ol>
        <div className="mt-4 text-sm text-gray-600">
          Note: Applying is free—avoid third-party companies charging fees for this service.
        </div>
      </div>
    </section>
  );
};
