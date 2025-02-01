import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RepaymentMethodSelector } from "@/components/loan-repayment/RepaymentMethodSelector";

const LoanRepaymentCalculator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Loan Repayment Calculator</h1>
        <RepaymentMethodSelector />
      </main>
      <Footer />
    </div>
  );
};

export default LoanRepaymentCalculator;