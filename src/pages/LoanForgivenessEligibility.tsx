
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EligibilityCheckerTool } from "@/components/loan-forgiveness/EligibilityCheckerTool";
import { BackButton } from "@/components/calculator/BackButton";
import { Calculator, Shield } from "lucide-react";

const LoanForgivenessEligibility = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gradient-to-b from-white to-violet-50">
        <div className="container mx-auto px-4">
          <BackButton />
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-violet-100 rounded-lg">
              <Shield className="h-6 w-6 text-violet-600" />
            </div>
            <h1 className="text-3xl font-bold text-violet-700">Loan Forgiveness Eligibility Checker</h1>
          </div>
          <div className="p-4 bg-white rounded-lg border border-violet-200 shadow-sm mb-6">
            <p className="text-gray-600">
              Find out if you qualify for student loan forgiveness programs. This tool evaluates your eligibility based on 
              your loan type, employment, and repayment history.
            </p>
          </div>
          <EligibilityCheckerTool />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoanForgivenessEligibility;
