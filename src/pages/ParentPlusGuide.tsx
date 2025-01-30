import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ParentPlusGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Parent PLUS Loans</h1>
        
        <section className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Understanding Parent PLUS Loans</h2>
          <p className="mb-6">
            Parent PLUS loans are federal loans that parents of dependent undergraduate students can take out to help pay for college expenses not covered by other financial aid.
          </p>

          <h3 className="text-xl font-semibold mb-3">Eligibility Requirements</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Be the parent of a dependent undergraduate student enrolled at least half-time</li>
            <li className="mb-2">Meet general eligibility requirements for federal student aid</li>
            <li className="mb-2">Pass a credit check or have an endorser</li>
            <li className="mb-2">Be a U.S. citizen or eligible non-citizen</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Borrow up to the cost of attendance minus other financial aid</li>
            <li className="mb-2">Fixed interest rate for the life of the loan</li>
            <li className="mb-2">Various repayment options available</li>
            <li className="mb-2">Option to defer payments while student is in school</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ParentPlusGuide;