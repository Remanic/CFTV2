import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FafsaEstimatorTool } from "@/components/fafsa-estimator/FafsaEstimatorTool";

const FafsaEstimator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-purple-600">FAFSA Aid Estimator</h1>
          <FafsaEstimatorTool />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FafsaEstimator;