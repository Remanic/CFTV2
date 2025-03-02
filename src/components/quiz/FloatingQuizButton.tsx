
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useQuiz } from "./QuizContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuizQuestions } from "./QuizQuestions";
import { QuizResults } from "./QuizResults";
import { Target } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingQuizButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [pulsing, setPulsing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const { stage, startQuiz } = useQuiz();
  const isMobile = useIsMobile();

  // Show floating button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showThreshold = window.innerHeight * 0.3; // Reduced threshold to show earlier
      setShowButton(scrollY > showThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add periodic pulsing effect to draw attention
  useEffect(() => {
    if (showButton) {
      const pulseInterval = setInterval(() => {
        setPulsing(true);
        setTimeout(() => setPulsing(false), 1000);
      }, 5000);
      
      return () => clearInterval(pulseInterval);
    }
  }, [showButton]);

  // Hide tooltip after 10 seconds or when clicked
  useEffect(() => {
    if (showButton && showTooltip) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 10000);
      
      return () => clearTimeout(tooltipTimer);
    }
  }, [showButton, showTooltip]);

  const handleStartQuiz = () => {
    startQuiz();
    setDialogOpen(true);
    setShowTooltip(false);
  };

  // Position differently based on device - aligned with back-to-top button
  const buttonPosition = isMobile
    ? "bottom-24 right-4" // Mobile position (higher up, aligned with back-to-top)
    : "bottom-24 right-8"; // Desktop position

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: pulsing ? [1, 1.1, 1] : 1, 
              y: 0 
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ 
              duration: 0.3,
              scale: { duration: 0.5, ease: "easeInOut" }
            }}
            className={`fixed ${buttonPosition} z-50`}
          >
            {showTooltip && (
              <div className="relative">
                <span className="absolute -top-16 right-0 bg-blue-800 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap shadow-md">
                  Find Your Personalized Path
                  <div className="absolute w-2 h-2 bg-blue-800 rotate-45 bottom-[-4px] right-6"></div>
                </span>
                <button 
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-16 right-0 text-white opacity-70 hover:opacity-100 text-xs font-bold"
                  aria-label="Close tooltip"
                >
                  <span className="absolute top-0.5 right-2">×</span>
                </button>
              </div>
            )}
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.3, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="absolute inset-0 rounded-full bg-blue-200 z-0"
              />
              <Button
                onClick={handleStartQuiz}
                className={`rounded-full ${isMobile ? 'h-12 w-12' : 'h-14 w-14'} p-0 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all relative z-10`}
                aria-label="Take quiz"
              >
                <Target className={isMobile ? "h-5 w-5" : "h-6 w-6"} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">
              {stage === "in_progress"
                ? "Find Your Student Loan Path"
                : stage === "completed"
                ? "Your Personalized Recommendations"
                : "60-Second Loan Journey Assessment"}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-2">
            {stage === "in_progress" ? (
              <QuizQuestions />
            ) : stage === "completed" ? (
              <QuizResults />
            ) : (
              <div className="text-center p-4">
                <Target className="h-16 w-16 mx-auto text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Find Your Ideal Loan Strategy
                </h3>
                <p className="text-gray-600 mb-6">
                  Answer 4 quick questions to get personalized guidance for your
                  student loan journey and save thousands.
                </p>
                <Button onClick={startQuiz} className="w-full py-6">
                  Start Quick Assessment
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
