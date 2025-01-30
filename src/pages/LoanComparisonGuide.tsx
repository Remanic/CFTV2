import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const LoanComparisonGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Federal vs Private Student Loans</h1>
        
        <section className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Key Differences Between Federal and Private Loans</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Federal Student Loans</h3>
              <ul className="list-disc pl-6">
                <li className="mb-2">Fixed interest rates set by Congress</li>
                <li className="mb-2">No credit check required (except for PLUS loans)</li>
                <li className="mb-2">Income-driven repayment plans available</li>
                <li className="mb-2">Loan forgiveness options</li>
                <li className="mb-2">Standardized application process (FAFSA)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Private Student Loans</h3>
              <ul className="list-disc pl-6">
                <li className="mb-2">Variable or fixed interest rates based on creditworthiness</li>
                <li className="mb-2">Credit check required</li>
                <li className="mb-2">Limited repayment flexibility</li>
                <li className="mb-2">No loan forgiveness options</li>
                <li className="mb-2">Varies by lender</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoanComparisonGuide;