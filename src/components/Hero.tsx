
import { useState, useEffect } from "react";
import { HeroHeading } from "./hero/HeroHeading";
import { HeroCTA } from "./hero/HeroCTA";
import { BenefitsGrid } from "./hero/BenefitsGrid";
import { ExitIntentDialog } from "./hero/ExitIntentDialog";

export const Hero = () => {
  const [exitIntent, setExitIntent] = useState(false);
  const [exitFeedbackOpen, setExitFeedbackOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 20 && !exitIntent && hasInteracted) {
        setExitIntent(true);
        setExitFeedbackOpen(true);
      }
    };

    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("click", handleInteraction);
    document.addEventListener("scroll", handleInteraction);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };
  }, [exitIntent, hasInteracted]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!exitFeedbackOpen && hasInteracted) {
        setExitFeedbackOpen(true);
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [exitFeedbackOpen, hasInteracted]);

  const handleExitFeedbackSkip = () => {
    setExitFeedbackOpen(false);
  };

  const handleExitFeedbackSubmit = () => {
    setExitFeedbackOpen(false);
  };

  return (
    <section className="relative py-4 sm:py-6 md:py-12 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <HeroHeading />
          <HeroCTA />
          <BenefitsGrid />
        </div>
      </div>

      <ExitIntentDialog 
        open={exitFeedbackOpen} 
        onOpenChange={setExitFeedbackOpen}
        onSkip={handleExitFeedbackSkip}
        onSubmit={handleExitFeedbackSubmit}
      />
    </section>
  );
};
