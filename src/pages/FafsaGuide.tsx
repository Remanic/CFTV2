import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FafsaGuideContent } from "@/components/fafsa-guide/FafsaGuideContent";

const FafsaGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FafsaGuideContent />
      <Footer />
    </div>
  );
};

export default FafsaGuide;