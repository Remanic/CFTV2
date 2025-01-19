import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TLFContent } from "@/components/loan-forgiveness/TLFContent";

const TeacherLoanForgiveness = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TLFContent />
      <Footer />
    </div>
  );
};

export default TeacherLoanForgiveness;