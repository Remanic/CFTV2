import { 
  GraduationCap, 
  BookOpen, 
  Calculator, 
  PiggyBank, 
  CheckCircle2, 
  Star,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Navigate FAFSA with Confidence",
    icon: GraduationCap,
    content: [
      "Use our FAFSA Guide for step-by-step instructions.",
      "Stay on track with our FAFSA Deadline Checker.",
      "Maximize your aid using the FAFSA Aid Estimator."
    ],
    cta: {
      text: "Start FAFSA Guide",
      link: "/fafsa-application-guide"
    }
  },
  {
    number: "02",
    title: "Explore Loan Options",
    icon: BookOpen,
    content: [
      "Learn with our Federal Loan Guide and overview of Federal Loan Types.",
      "Compare private lenders with detailed rates, pros, and cons tailored to your needs."
    ],
    cta: {
      text: "Compare Loans",
      link: "/all-lenders"
    }
  },
  {
    number: "03",
    title: "Plan for Loan Repayment",
    icon: Calculator,
    content: [
      "Choose the best repayment plan with our Repayment Guide.",
      "Use the Loan Repayment Calculator to compare and save."
    ],
    cta: {
      text: "Calculate Payments",
      link: "/monthly-loan-emi-calculator"
    }
  },
  {
    number: "04",
    title: "Understand Loan Forgiveness Eligibility",
    icon: CheckCircle2,
    content: [
      "Get insights into Loan Forgiveness eligibility and explore strategies to qualify."
    ],
    cta: {
      text: "Check Eligibility",
      link: "/fafsa-aid-estimator"
    }
  },
  {
    number: "05",
    title: "Leverage Smart Tools for Every Decision",
    icon: Calculator,
    content: [
      "Manage your finances better with our calculators:",
      "Mortgage, EMI, Savings, Credit Card, and Auto Loan calculators."
    ],
    cta: {
      text: "Try Calculators",
      link: "/mortgage-loan-calculator"
    }
  },
  {
    number: "06",
    title: "Achieve Financial Freedom",
    icon: Star,
    content: [
      "Simplify your entire journey by:",
      "Choosing the right loan.",
      "Maximizing aid opportunities.",
      "Selecting the best repayment plan.",
      "Planning for forgiveness and reducing financial stress."
    ],
    cta: {
      text: "Get Started",
      link: "/fafsa-application-guide"
    }
  }
];

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            How CashFlowTime Works
          </h2>
          <p className="text-xl text-gray-600">
            A simple 6-step guide to tackle student loans with confidence
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "group relative p-6 rounded-xl transition-all duration-300 flex flex-col h-full",
                "hover:shadow-lg",
                "bg-white border border-gray-100",
                activeStep === index ? "ring-2 ring-blue-500" : ""
              )}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">
                  {step.number}
                </div>
                <step.icon className="w-6 h-6 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <ul className="space-y-2 text-gray-600 mb-6 flex-grow">
                {step.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 text-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                asChild
                className="w-full mt-auto group-hover:bg-blue-600"
                variant="secondary"
              >
                <a href={step.cta.link}>{step.cta.text}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden">
          <Accordion type="single" collapsible>
            {steps.map((step, index) => (
              <AccordionItem key={step.number} value={`step-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                      {step.number}
                    </div>
                    <div className="flex items-center gap-2">
                      <step.icon className="w-5 h-5 text-blue-600" />
                      <span className="text-left font-semibold">{step.title}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-14">
                    <ul className="space-y-2 text-gray-600 mb-4">
                      {step.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full mt-2"
                      variant="secondary"
                    >
                      <a href={step.cta.link}>{step.cta.text}</a>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
