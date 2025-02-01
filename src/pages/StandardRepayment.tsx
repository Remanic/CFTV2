import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const StandardRepayment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Standard Repayment Plan</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            The Standard Repayment Plan is the basic repayment plan for federal student loans. Under this plan, you'll pay a fixed amount each month for up to 10 years.
          </p>
          {/* Add more content about standard repayment */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StandardRepayment;