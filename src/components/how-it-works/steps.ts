
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
      "Step-by-step FAFSA guidance",
      "Track deadlines automatically",
      "Maximize your eligible aid"
    ],
    sectionId: "fafsa-guide",
    cta: {
      text: "Learn More",
      link: "#fafsa-guide"
    }
  },
  {
    number: "02",
    title: "Explore Loan Options",
    icon: BookOpen,
    content: [
      "Compare federal vs private loans",
      "Find the best rates for your situation",
      "Understand all terms before committing"
    ],
    sectionId: "loan-comparison",
    cta: {
      text: "Learn More",
      link: "#loan-comparison"
    }
  },
  {
    number: "03",
    title: "Plan for Repayment",
    icon: Calculator,
    content: [
      "Choose the best repayment plan",
      "Calculate savings across options",
      "Minimize interest & total costs"
    ],
    sectionId: "loan-repayment",
    cta: {
      text: "Learn More",
      link: "#loan-repayment"
    }
  },
  {
    number: "04",
    title: "Unlock Forgiveness Options",
    icon: CheckCircle2,
    content: [
      "Check eligibility automatically",
      "Navigate requirements step-by-step",
      "Maximize forgiveness potential"
    ],
    sectionId: "loan-forgiveness",
    cta: {
      text: "Learn More",
      link: "#loan-forgiveness"
    }
  },
  {
    number: "05",
    title: "Smart Financial Tools",
    icon: Calculator,
    content: [
      "Comprehensive calculators suite",
      "Model different financial scenarios",
      "Make informed decisions quickly"
    ],
    sectionId: "financial-tools",
    cta: {
      text: "Learn More",
      link: "#financial-tools"
    }
  },
  {
    number: "06",
    title: "Achieve Financial Freedom",
    icon: Star,
    content: [
      "Eliminate student debt faster",
      "Build wealth while managing loans",
      "Join thousands of success stories"
    ],
    highlight: true
  }
];
