import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const FafsaReview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-8 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-green-600">Understanding Your FAFSA Submission</h1>
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Learn how to review, understand, and verify your FAFSA submission to ensure you've provided accurate information for maximum aid eligibility.
            </p>
            {/* Add detailed content here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FafsaReview;