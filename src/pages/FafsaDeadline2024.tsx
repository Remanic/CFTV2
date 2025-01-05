import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FafsaDeadline2024Content } from "@/components/fafsa-deadline/FafsaDeadline2024Content";

const FafsaDeadline2024 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FafsaDeadline2024Content />
      <Footer />
    </div>
  );
};

export default FafsaDeadline2024;