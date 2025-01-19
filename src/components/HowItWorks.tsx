import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { StepCard } from "./how-it-works/StepCard";
import { MobileStepCard } from "./how-it-works/MobileStepCard";
import { steps } from "./how-it-works/steps";

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#E6F3FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#1E3A8A]">
            How CashFlowTime Works
          </h2>
          <p className="text-xl text-[#475569]">
            A simple 6-step guide to tackle student loans with confidence
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              Icon={step.icon}
              content={step.content}
              cta={step.cta}
              isActive={activeStep === index}
              onMouseEnter={() => setActiveStep(index)}
            />
          ))}
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden">
          <Accordion type="single" collapsible className="space-y-4">
            {steps.map((step) => (
              <MobileStepCard
                key={step.number}
                number={step.number}
                title={step.title}
                Icon={step.icon}
                content={step.content}
                cta={step.cta}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};