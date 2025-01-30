import { GuideCard } from "../fafsa-guide/GuideCard";
import { GuideHeader } from "../fafsa-guide/GuideHeader";
import { Calculator, DollarSign, PiggyBank, TrendingUp, Wallet } from "lucide-react";
import { RepaymentMethodSelector } from "./RepaymentMethodSelector";
import { useState } from "react";

export const LoanRepaymentSection = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  const guides = [
    {
      title: "Repayment Calculator",
      description: "Find your optimal repayment strategy with our interactive calculator",
      icon: Calculator,
      color: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200",
      textColor: "text-indigo-700",
      onClick: () => setShowCalculator(true)
    },
    {
      title: "Income-Driven Plans",
      description: "Learn about income-based repayment options and how they work",
      icon: DollarSign,
      color: "bg-fuchsia-50 hover:bg-fuchsia-100 border-fuchsia-200",
      textColor: "text-fuchsia-700",
      onClick: () => setShowCalculator(true)
    },
    {
      title: "Standard Repayment",
      description: "Understand the traditional 10-year repayment plan",
      icon: Wallet,
      color: "bg-teal-50 hover:bg-teal-100 border-teal-200",
      textColor: "text-teal-700",
      onClick: () => setShowCalculator(true)
    },
    {
      title: "Graduated Plans",
      description: "Explore plans with increasing payments over time",
      icon: TrendingUp,
      color: "bg-amber-50 hover:bg-amber-100 border-amber-200",
      textColor: "text-amber-700",
      onClick: () => setShowCalculator(true)
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <GuideHeader 
          title="Loan Repayment Options"
          description="Explore different repayment plans and find the best strategy for your student loans. Use our calculator to compare options and make informed decisions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {guides.map((guide, index) => (
            <div key={index} onClick={guide.onClick} className="cursor-pointer">
              <GuideCard {...guide} />
            </div>
          ))}
        </div>

        {showCalculator && (
          <div className="mt-12">
            <RepaymentMethodSelector />
          </div>
        )}
      </div>
    </section>
  );
};