import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const StudentLoanEssentials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Essential Student Information</h1>
        
        <section className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Key Information Before Borrowing</h2>
          
          <h3 className="text-xl font-semibold mb-3">Before You Borrow</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Understand the total cost of attendance</li>
            <li className="mb-2">Explore all scholarship and grant opportunities</li>
            <li className="mb-2">Calculate your expected monthly payments</li>
            <li className="mb-2">Consider your future earning potential</li>
            <li className="mb-2">Understand interest rates and how they affect total repayment</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Important Documents to Prepare</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">FAFSA application</li>
            <li className="mb-2">Tax returns and income information</li>
            <li className="mb-2">School's financial aid award letter</li>
            <li className="mb-2">Personal identification documents</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Managing Your Loans</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Keep track of all loan documents</li>
            <li className="mb-2">Understand your grace period</li>
            <li className="mb-2">Know your loan servicer</li>
            <li className="mb-2">Set up online accounts for loan management</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudentLoanEssentials;