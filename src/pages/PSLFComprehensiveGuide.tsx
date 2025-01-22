import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PSLFComprehensiveGuide } from "@/components/loan-forgiveness/PSLFComprehensiveGuide";

const PSLFComprehensiveGuidePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PSLFComprehensiveGuide />
      <Footer />
    </div>
  );
};

export default PSLFComprehensiveGuidePage;