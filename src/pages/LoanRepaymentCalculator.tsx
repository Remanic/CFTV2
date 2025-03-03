
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnhancedRepaymentCalculator } from "@/components/loan-repayment/EnhancedRepaymentCalculator";
import { BackButton } from "@/components/calculator/BackButton";
import { DollarSign } from "lucide-react";

const LoanRepaymentCalculator = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-orange-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-orange-700">Student Loan Repayment Simulator</h1>
          </div>
          <div className="p-4 bg-white rounded-lg border border-orange-200 shadow-sm mb-6">
            <p className="text-gray-600">
              Compare different repayment plans, discover optimization strategies, and find the best option for your situation.
            </p>
          </div>
          <EnhancedRepaymentCalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoanRepaymentCalculator;
