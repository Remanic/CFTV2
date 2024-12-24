import { Hero } from "@/components/Hero";
import { WhyNeedGuide } from "@/components/WhyNeedGuide";
import { LoanComparison } from "@/components/LoanComparison";
import { QuickUnderstand } from "@/components/QuickUnderstand";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyNeedGuide />
      <LoanComparison />
      <QuickUnderstand />
    </div>
  );
};

export default Index;