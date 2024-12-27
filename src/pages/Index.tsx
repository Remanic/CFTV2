import { Hero } from "@/components/Hero";
import { WhyNeedGuide } from "@/components/WhyNeedGuide";
import { LoanComparison } from "@/components/LoanComparison";
import { QuickUnderstand } from "@/components/QuickUnderstand";
import { FafsaGuide } from "@/components/FafsaGuide";
import { AffiliateLoanSection } from "@/components/AffiliateLoanSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyNeedGuide />
        <AffiliateLoanSection />
        <FafsaGuide />
        <LoanComparison />
        <QuickUnderstand />
      </main>
      <Footer />
    </div>
  );
};

export default Index;