
import { useState } from "react";
import { SectionHeader } from "./how-it-works/SectionHeader";
import { DesktopStepsGrid } from "./how-it-works/DesktopStepsGrid";
import { MobileStepsAccordion } from "./how-it-works/MobileStepsAccordion";
import { steps } from "./how-it-works/steps";

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
        </div>
        <SectionHeader 
          title="How CashFlowTime Works"
          subtitle="A simple 6-step guide to tackle student loans with confidence"
        />
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
