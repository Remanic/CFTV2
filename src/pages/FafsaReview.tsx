import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FafsaReviewContent } from "@/components/fafsa-review/FafsaReviewContent";

const FafsaReview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FafsaReviewContent />
      <Footer />
    </div>
  );
};

export default FafsaReview;