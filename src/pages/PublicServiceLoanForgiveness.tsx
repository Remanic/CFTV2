import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PSLFContent } from "@/components/loan-forgiveness/PSLFContent";

const PublicServiceLoanForgiveness = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PSLFContent />
      <Footer />
    </div>
  );
};

export default PublicServiceLoanForgiveness;