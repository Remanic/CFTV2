
import { Accordion } from "@/components/ui/accordion";
import { MobileStepCard } from "./MobileStepCard";
import { Step } from "./types";

interface MobileStepsAccordionProps {
  steps: Step[];
}

export const MobileStepsAccordion = ({ steps }: MobileStepsAccordionProps) => (
  <div className="lg:hidden">
    <Accordion type="single" collapsible className="space-y-4">
      {steps.map((step) => (
        <MobileStepCard
          key={step.number}
          number={step.number}
          title={step.title}
          Icon={step.icon}
          content={step.content}
          sectionId={step.sectionId}
          cta={step.cta}
        />
      ))}
    </Accordion>
  </div>
);
