
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from || "/";

  const handleBack = () => {
    // If we have a specific section to navigate back to on the homepage
    if (fromPage === "/" && location.state?.section) {
      navigate("/", { state: { scrollToSection: location.state.section } });
    } else {
      navigate(fromPage);
    }
  };

  return (
    <Button 
      variant="ghost" 
      className="flex items-center gap-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 mb-4"
      onClick={handleBack}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back</span>
    </Button>
  );
};
