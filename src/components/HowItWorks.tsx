
import { useState } from "react";
import { SectionHeader } from "./how-it-works/SectionHeader";
import { DesktopStepsGrid } from "./how-it-works/DesktopStepsGrid";
import { MobileStepsAccordion } from "./how-it-works/MobileStepsAccordion";
import { steps } from "./how-it-works/steps";
import { JourneyPathSelector } from "./how-it-works/JourneyPathSelector";

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-16 bg-white relative overflow-hidden">
      {/* Simplified decorative elements for better performance */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-purple-50 rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="mb-5 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm">
            Simple 6-Step Process
          </span>
        </div>

        <SectionHeader 
          title="Master Your Student Loan Journey"
          subtitle="Find your path through the student loan process"
        />
        
        <div className="max-w-xl mx-auto mb-8 text-center">
          <p className="text-gray-600">
            Select where you are in your journey to get personalized guidance for your specific needs.
          </p>
        </div>

        <JourneyPathSelector />
        
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800">
              Complete Journey Roadmap
            </h3>
          </div>
          
          <DesktopStepsGrid 
            steps={steps}
            activeStep={activeStep}
            onStepHover={setActiveStep}
          />
          <MobileStepsAccordion steps={steps} />
        </div>
      </div>
    </section>
  );
};
