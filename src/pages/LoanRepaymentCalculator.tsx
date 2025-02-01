import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnhancedRepaymentCalculator } from "@/components/loan-repayment/EnhancedRepaymentCalculator";

const LoanRepaymentCalculator = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Loan Repayment Calculator</h1>
          <p className="text-gray-600 mb-8">
            Estimate your monthly payments and compare different repayment plans to find the best option for your situation.
          </p>
          <EnhancedRepaymentCalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoanRepaymentCalculator;