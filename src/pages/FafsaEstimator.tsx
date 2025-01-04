import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const FafsaEstimator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-purple-600">FAFSA Aid Estimator</h1>
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Use our FAFSA Aid Estimator tool to get an idea of how much federal student aid you might be eligible to receive.
            </p>
            {/* Add calculator tool here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FafsaEstimator;