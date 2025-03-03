
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  // Optimize scroll event with throttling
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add throttling to scroll event for better performance
  useEffect(() => {
    let scrollTimer: number;
    const handleScroll = () => {
      if (scrollTimer) return;
      scrollTimer = window.setTimeout(() => {
        toggleVisibility();
        scrollTimer = 0;
      }, 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Position differently based on device - aligned with quiz button
  const buttonPosition = isMobile
    ? "bottom-6 right-4" 
    : "bottom-6 right-6";

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        `fixed ${buttonPosition} p-3 rounded-full bg-white shadow-lg border border-gray-200 z-40`,
        "transition-opacity duration-200",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5 text-gray-700" />
    </button>
  );
};
