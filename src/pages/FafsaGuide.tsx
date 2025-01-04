import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const FafsaGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-600">Comprehensive Guide to Filling Out the FAFSA Form</h1>
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              This comprehensive guide will walk you through every step of completing your FAFSA application for the 2024-2025 academic year.
            </p>
            {/* Add detailed content here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FafsaGuide;