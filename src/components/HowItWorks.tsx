
import { SectionHeader } from "./how-it-works/SectionHeader";
import { JourneyPathSelector } from "./how-it-works/JourneyPathSelector";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white relative overflow-hidden">
      {/* Simplified decorative elements for better performance */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-purple-50 rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="mb-5 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm">
            Find Your Path
          </span>
        </div>

        <SectionHeader 
          title="Master Your Student Loan Journey"
          subtitle=""
        />

        <JourneyPathSelector />
      </div>
    </section>
  );
};
