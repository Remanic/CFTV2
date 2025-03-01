
import { useState } from "react";
import { SectionHeader } from "./how-it-works/SectionHeader";
import { DesktopStepsGrid } from "./how-it-works/DesktopStepsGrid";
import { MobileStepsAccordion } from "./how-it-works/MobileStepsAccordion";
import { steps } from "./how-it-works/steps";

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Static decorative elements - removed animations */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-purple-50 rounded-full opacity-20"></div>
      <div className="absolute bottom-32 right-1/4 w-32 h-32 bg-yellow-50 rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="mb-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4 shadow-sm">
            Simple 6-Step Process
          </span>
        </div>
        <SectionHeader 
          title="Master Your Student Loan Journey"
          subtitle="From FAFSA to financial freedom in 6 simple steps"
        />
        
        <div className="max-w-xl mx-auto mb-12 text-center">
          <p className="text-gray-600 text-lg">
            Our proven system guides you through every aspect of student loans, saving you time, 
            reducing stress, and potentially thousands in repayments.
          </p>
        </div>
        
        <DesktopStepsGrid 
          steps={steps}
          activeStep={activeStep}
          onStepHover={setActiveStep}
        />
        <MobileStepsAccordion steps={steps} />
      </div>
    </section>
  );
};
