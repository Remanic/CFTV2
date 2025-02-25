
import { IDRPlanCard } from "./IDRPlanCard";

export const IDRPlansSection = () => {
  return (
    <section id="types-of-idr" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Types of Income-Driven Repayment Plans in 2025</h2>
      <div className="space-y-8">
        <IDRPlanCard
          title="1. SAVE (Saving on a Valuable Education) Plan"
          status="Currently offered, but facing legal challenges. Its future is uncertain due to ongoing litigation."
          details={[
            "Payments are 5% of discretionary income for undergraduate loans and 10% for graduate loans",
            "Payments can drop to $0, and unpaid interest doesn't capitalize (it won't increase your loan balance)",
            "Forgiveness after 20-25 years, or as little as 10 years for borrowers with low original balances (e.g., $12,000 or less)"
          ]}
          changes="Introduced as a replacement for REPAYE, SAVE is currently in limbo. As of 2025, borrowers are in a general forbearance due to legal disputes—no payments are due, and interest isn't accruing, but this time doesn't count toward forgiveness."
          audience="Borrowers seeking the lowest possible payments, especially for undergraduate loans."
        />
        
        <IDRPlanCard
          title="2. PAYE (Pay As You Earn) Plan"
          status="Currently offered. Reopened to new borrowers in mid-January 2025."
          details={[
            "Payments are 10% of discretionary income, capped at the standard 10-year repayment amount",
            "Forgiveness after 20 years"
          ]}
          audience="New borrowers (post-2007) with financial hardship who want a payment cap."
        />
        
        <IDRPlanCard
          title="3. IBR (Income-Based Repayment) Plan"
          status="Currently offered. No closures or interruptions reported."
          details={[
            "Payments are 10% of discretionary income (for new borrowers after July 1, 2014) or 15% (for earlier borrowers)",
            "Forgiveness after 20 years (new borrowers) or 25 years (older borrowers)",
            "Remains stable, unaffected by legal challenges or closures impacting other plans"
          ]}
          audience="Borrowers who don't qualify for PAYE or need a reliable, long-standing option."
        />
        
        <IDRPlanCard
          title="4. ICR (Income-Contingent Repayment) Plan"
          status="Currently offered. Reopened to new borrowers in mid-January 2025."
          details={[
            "Payments are the lesser of 20% of discretionary income or what you'd pay on a 12-year fixed plan",
            "Forgiveness after 25 years",
            "Similar to PAYE, ICR's temporary closure in 2024 was lifted in 2025"
          ]}
          audience="Borrowers ineligible for other IDR plans, including parent PLUS loan holders (after consolidation)."
        />

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-medium text-blue-800">Quick Tip: Use the Federal Student Aid Loan Simulator to compare payments and forgiveness timelines across these plans.</p>
        </div>
      </div>
    </section>
  );
};
