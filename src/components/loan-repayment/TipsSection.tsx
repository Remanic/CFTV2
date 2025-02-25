
export const TipsSection = () => {
  return (
    <section id="tips-and-hacks" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Life-Saving Tips and Hacks for IDR Plans</h2>
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 className="text-lg font-semibold mb-2">1. PSLF Eligibility Hack with Minimum Payments</h3>
          <div className="space-y-2">
            <p className="font-medium">What It Is:</p>
            <p>Public Service Loan Forgiveness (PSLF) cancels your remaining loan balance after 120 qualifying payments while working full-time for a qualifying employer.</p>
            <p className="font-medium mt-2">How to Do It:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enroll in SAVE or PAYE, where payments can be as low as $0 based on your income</li>
              <li>Even $0 payments count toward the 120 needed for PSLF</li>
              <li>Recertify your income yearly to keep payments minimal</li>
            </ul>
            <p className="mt-2"><span className="font-medium">Example:</span> If you owe $50,000 and your SAVE payment is $0, after 120 payments (10 years), the full $50,000 is forgiven under PSLF.</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 className="text-lg font-semibold mb-2">2. Marriage and Income Strategy</h3>
          <div className="space-y-2">
            <p><span className="font-medium">What to Know:</span> For most IDR plans (PAYE, IBR, ICR), filing taxes jointly includes your spouse's income, potentially raising your payments.</p>
            <p><span className="font-medium">Hack:</span> Under SAVE, filing separately considers only your income, lowering your payment if your spouse earns more.</p>
            <p><span className="font-medium">Consideration:</span> Compare this benefit against tax advantages of filing jointly before deciding.</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 className="text-lg font-semibold mb-2">3. Switching Plans Smartly</h3>
          <div className="space-y-2">
            <p><span className="font-medium">What to Know:</span> You can switch IDR plans if your finances change, but it might reset your forgiveness timeline or alter payments.</p>
            <p><span className="font-medium">Hack:</span> Stick with your current plan if you're near forgiveness. Use the Loan Simulator to weigh pros and cons before switching.</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 className="text-lg font-semibold mb-2">4. Build an Emergency Loan Fund</h3>
          <div className="space-y-2">
            <p><span className="font-medium">What to Do:</span> Save the difference between your IDR payment and a standard payment in a high-yield savings account.</p>
            <p><span className="font-medium">Why It Helps:</span> If plans like SAVE are discontinued, this fund can cover higher payments, offering peace of mind amid uncertainty.</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 className="text-lg font-semibold mb-2">5. Leverage the PSLF Buy Back Program</h3>
          <div className="space-y-2">
            <p><span className="font-medium">What It Is:</span> A 2025 update allowing borrowers to "buy back" PSLF credit for months spent in forbearance.</p>
            <p><span className="font-medium">Hack:</span> If you've lost PSLF progress due to forbearance, this program could restore your timeline—check with your servicer for eligibility.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
