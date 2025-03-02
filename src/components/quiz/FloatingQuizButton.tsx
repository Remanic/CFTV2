
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
  const { stage, startQuiz } = useQuiz();
  const isMobile = useIsMobile();

  // Show floating button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showThreshold = window.innerHeight * 0.5;
      setShowButton(scrollY > showThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStartQuiz = () => {
    startQuiz();
    setDialogOpen(true);
  };

  // Position differently based on device
  const buttonPosition = isMobile
    ? "bottom-4 right-4" // Mobile position
    : "bottom-8 right-8"; // Desktop position

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed ${buttonPosition} z-50`}
          >
            <span className="absolute -top-14 right-0 bg-blue-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-md">
              Find Your Path
            </span>
            <Button
              onClick={handleStartQuiz}
              className="rounded-full h-14 w-14 p-0 bg-blue-600 hover:bg-blue-700 shadow-lg"
              aria-label="Take quiz"
            >
              <Target className="h-6 w-6" />
            </Button>
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
                : "Student Loan Assessment"}
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
                  60-Second Loan Journey Quiz
                </h3>
                <p className="text-gray-600 mb-6">
                  Answer 4 quick questions to get personalized guidance for your
                  student loan journey.
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
