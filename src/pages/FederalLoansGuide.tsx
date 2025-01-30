import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const FederalLoansGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Federal Student Loans 101</h1>
        
        <section className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Understanding Federal Student Loans</h2>
          <p className="mb-6">
            Federal student loans are funded by the federal government and offer several benefits that private loans typically don't provide, including fixed interest rates, income-driven repayment plans, and various loan forgiveness options.
          </p>

          <h3 className="text-xl font-semibold mb-3">Types of Federal Student Loans</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Direct Subsidized Loans - for undergraduate students with financial need</li>
            <li className="mb-2">Direct Unsubsidized Loans - for undergraduate and graduate students, no financial need required</li>
            <li className="mb-2">Direct PLUS Loans - for graduate students and parents of dependent undergraduate students</li>
            <li className="mb-2">Direct Consolidation Loans - combines multiple federal education loans into a single loan</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Fixed interest rates set by Congress</li>
            <li className="mb-2">No credit check for most federal student loans</li>
            <li className="mb-2">Flexible repayment options</li>
            <li className="mb-2">Possibility of loan forgiveness</li>
            <li className="mb-2">No prepayment penalties</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FederalLoansGuide;