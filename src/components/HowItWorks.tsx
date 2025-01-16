import { 
  GraduationCap, 
  BookOpen, 
  Calculator, 
  PiggyBank, 
  CheckCircle2, 
  Star 
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Navigate FAFSA with Confidence",
    icon: GraduationCap,
    content: [
      "Use our FAFSA Guide for step-by-step instructions.",
      "Stay on track with our FAFSA Deadline Checker.",
      "Maximize your aid using the FAFSA Aid Estimator."
    ]
  },
  {
    number: "02",
    title: "Explore Loan Options",
    icon: BookOpen,
    content: [
      "Learn with our Federal Loan Guide and overview of Federal Loan Types.",
      "Compare private lenders with detailed rates, pros, and cons tailored to your needs."
    ]
  },
  {
    number: "03",
    title: "Plan for Loan Repayment",
    icon: Calculator,
    content: [
      "Choose the best repayment plan with our Repayment Guide.",
      "Use the Loan Repayment Calculator to compare and save."
    ]
  },
  {
    number: "04",
    title: "Understand Loan Forgiveness Eligibility",
    icon: CheckCircle2,
    content: [
      "Get insights into Loan Forgiveness eligibility and explore strategies to qualify."
    ]
  },
  {
    number: "05",
    title: "Leverage Smart Tools for Every Decision",
    icon: Calculator,
    content: [
      "Manage your finances better with our calculators:",
      "Mortgage, EMI, Savings, Credit Card, and Auto Loan calculators."
    ]
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
    ]
  }
];

export const HowItWorks = () => {
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

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "relative flex gap-8 mb-16 last:mb-0",
                "md:gap-12"
              )}
            >
              {/* Step number and connector line */}
              <div className="relative flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute top-12 bottom-0 w-0.5 bg-blue-100" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-4 mb-4">
                  <step.icon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <ul className="space-y-3">
                    {step.content.map((item, i) => (
                      <li
                        key={i}
                        className={cn(
                          "text-gray-600",
                          item.includes(":") ? "font-medium" : ""
                        )}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};