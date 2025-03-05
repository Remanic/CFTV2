
import { IDRPlanCard } from "./IDRPlanCard";

export const IDRPlansSection = () => {
  return (
    <section id="types-of-idr" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Types of IDR Plans</h2>
      <p className="mb-4">There are four primary IDR plans, each suited to different borrower needs. Here's a breakdown:</p>
      <div className="space-y-8">
        <IDRPlanCard
          title="1. SAVE (Saving on a Valuable Education) Plan"
          bestFor="Borrowers with undergraduate loans wanting minimal payments"
          calculation="5% of discretionary income for undergraduate loans, 10% for graduate loans"
          uniqueFeature="Payments can be $0, and unpaid interest doesn't capitalize (it won't add to your loan balance)"
          forgiveness="20-25 years, or as little as 10 years for small loans (e.g., $12,000 or less)"
          example="Earning $35,000 yearly with a family of two? Your SAVE payment might be $50/month—much lower than the standard $300+"
        />
        
        <IDRPlanCard
          title="2. PAYE (Pay As You Earn) Plan"
          bestFor="New borrowers (post-2007) with financial hardship"
          calculation="10% of discretionary income"
          uniqueFeature="Payments are capped at the standard 10-year plan amount"
          forgiveness="After 20 years"
          example="PAYE suits those expecting income growth, as payments won't exceed the standard plan"
        />
        
        <IDRPlanCard
          title="3. IBR (Income-Based Repayment) Plan"
          bestFor="Borrowers ineligible for PAYE"
          calculation="10-15% of discretionary income (10% for new borrowers after July 1, 2014; 15% for earlier borrowers)"
          uniqueFeature="Broad eligibility for federal loan borrowers"
          forgiveness="20-25 years"
          note="Payment percentage varies by when you borrowed"
        />
        
        <IDRPlanCard
          title="4. ICR (Income-Contingent Repayment) Plan"
          bestFor="Borrowers unqualified for other plans, including Parent PLUS loan holders (after consolidation)"
          calculation="20% of discretionary income or a fixed 12-year payment, whichever is less"
          uniqueFeature="The only IDR option for Parent PLUS loans (post-consolidation)"
          forgiveness="After 25 years"
        />

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-medium text-blue-800">Tip: Use the Federal Student Aid Loan Simulator to compare plans and estimate payments.</p>
        </div>
      </div>
    </section>
  );
};
