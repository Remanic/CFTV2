
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Position differently based on device - aligned with quiz button
  const buttonPosition = isMobile
    ? "bottom-6 right-4" // Position for mobile
    : "bottom-6 right-6"; // Position for desktop

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        `fixed ${buttonPosition} p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 z-40`,
        "transition-all duration-300 hover:bg-gray-50",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5 text-gray-700" />
    </button>
  );
};
