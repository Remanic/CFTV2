import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EligibilityCheckerTool } from "@/components/loan-forgiveness/EligibilityCheckerTool";

const LoanForgivenessEligibility = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <EligibilityCheckerTool />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoanForgivenessEligibility;