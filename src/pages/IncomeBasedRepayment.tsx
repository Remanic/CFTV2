import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const IncomeBasedRepayment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Income-Driven Repayment Plans</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Income-driven repayment plans are designed to make your student loan payments more affordable by basing them on your income and family size.
          </p>
          {/* Add more content about income-based repayment */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IncomeBasedRepayment;