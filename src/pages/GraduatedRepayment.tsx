import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const GraduatedRepayment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Graduated Repayment Plan</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            The Graduated Repayment Plan starts with lower payments that increase every two years. This plan is good for borrowers who expect their income to increase gradually over time.
          </p>
          {/* Add more content about graduated repayment */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GraduatedRepayment;