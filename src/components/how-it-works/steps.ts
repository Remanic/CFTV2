
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
    sectionId: "fafsa-guide"
  },
  {
    number: "02",
    title: "Explore Loan Options",
    icon: BookOpen,
    content: [
      "Learn with our Federal Loan Guide and overview of Federal Loan Types.",
      "Compare private lenders with detailed rates, pros, and cons tailored to your needs."
    ],
    sectionId: "loan-comparison"
  },
  {
    number: "03",
    title: "Plan for Loan Repayment",
    icon: Calculator,
    content: [
      "Choose the best repayment plan with our Repayment Guide.",
      "Use the Loan Repayment Calculator to compare and save."
    ],
    sectionId: "loan-repayment"
  },
  {
    number: "04",
    title: "Understand Loan Forgiveness Eligibility",
    icon: CheckCircle2,
    content: [
      "Get insights into Loan Forgiveness eligibility and explore strategies to qualify."
    ],
    sectionId: "loan-forgiveness"
  },
  {
    number: "05",
    title: "Leverage Smart Tools for Every Decision",
    icon: Calculator,
    content: [
      "Manage your finances better with our calculators:",
      "Mortgage, EMI, Savings, Credit Card, and Auto Loan calculators."
    ],
    sectionId: "financial-tools"
  },
  {
    number: "06",
    title: "Achieve Financial Freedom",
    icon: Star,
    content: [
      "🎓 Congratulations on taking control of your financial future!",
      "✨ You're now equipped with expert tools and knowledge",
      "💫 Join thousands who've transformed student debt into financial success",
      "🌟 Your path to a debt-free future starts here"
    ],
    highlight: true
  }
];
