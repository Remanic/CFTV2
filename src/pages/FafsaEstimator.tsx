
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FafsaEstimatorTool } from "@/components/fafsa-estimator/FafsaEstimatorTool";
import { BackButton } from "@/components/calculator/BackButton";
import { Calculator } from "lucide-react";

const FafsaEstimator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calculator className="h-6 w-6 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-purple-600">FAFSA Aid Estimator</h1>
          </div>
          <div className="p-4 bg-white rounded-lg border border-purple-200 shadow-sm mb-6">
            <p className="text-gray-600">
              Estimate your potential federal student aid based on your financial information.
              This tool provides a quick calculation of what you might receive.
            </p>
          </div>
          <FafsaEstimatorTool />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FafsaEstimator;
