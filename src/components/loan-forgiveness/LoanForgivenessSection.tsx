import { LoanForgivenessGuide } from "./LoanForgivenessGuide";
import { EligibilityChecker } from "./EligibilityChecker";

export const LoanForgivenessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Student Loan Forgiveness Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover if you qualify for student loan forgiveness and learn about the latest federal programs and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <LoanForgivenessGuide />
          <EligibilityChecker />
        </div>
      </div>
    </section>
  );
};