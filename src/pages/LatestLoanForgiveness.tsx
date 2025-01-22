import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LatestLoanForgivenessContent } from "@/components/loan-forgiveness/LatestLoanForgivenessContent";

const LatestLoanForgiveness = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <LatestLoanForgivenessContent />
      <Footer />
    </div>
  );
};

export default LatestLoanForgiveness;