import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FafsaDeadline2025Content } from "@/components/fafsa-deadline/FafsaDeadline2025Content";

const FafsaDeadline2025 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FafsaDeadline2025Content />
      <Footer />
    </div>
  );
};

export default FafsaDeadline2025;