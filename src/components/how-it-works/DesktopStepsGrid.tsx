
import { StepCard } from "./StepCard";
import { Step } from "./types";

interface DesktopStepsGridProps {
  steps: Step[];
  activeStep: number;
  onStepHover: (index: number) => void;
}

export const DesktopStepsGrid = ({ steps, activeStep, onStepHover }: DesktopStepsGridProps) => (
  <div className="hidden lg:grid grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
    {steps.map((step, index) => (
      <StepCard
        key={step.number}
        number={step.number}
        title={step.title}
        Icon={step.icon}
        content={step.content}
        sectionId={step.sectionId}
        highlight={step.highlight}
        isActive={activeStep === index}
        onMouseEnter={() => onStepHover(index)}
      />
    ))}
  </div>
);
