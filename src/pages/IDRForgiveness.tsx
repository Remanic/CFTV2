
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IDRForgivenessContent } from "@/components/loan-forgiveness/IDRForgivenessContent";

const IDRForgiveness = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <IDRForgivenessContent />
      <Footer />
    </div>
  );
};

export default IDRForgiveness;
