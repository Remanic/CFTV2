import { 
  GraduationCap, 
  BookOpen, 
  Calculator, 
  PiggyBank, 
  CheckCircle2, 
  Star,
} from "lucide-react";

export const steps = [
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