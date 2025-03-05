
import { useState, useEffect } from "react";
import { useQuiz } from "./QuizContext";
import { QuizQuestions } from "./QuizQuestions";
import { QuizResults } from "./QuizResults";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from "@/components/ui/dialog";
import { ArrowRight, MapPin, Target, ThumbsUp, BadgeCheck, ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export const LoanJourneyQuiz = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { stage, startQuiz, resetQuiz } = useQuiz();
  const location = useLocation();
  
  // Check if we're returning from another page
  useEffect(() => {
    const fromQuiz = location.state?.fromQuiz === true;
    if (fromQuiz && stage === "completed") {
      // Scroll to the quiz section when returning
      const quizElement = document.getElementById('loan-journey-quiz');
      if (quizElement) {
        quizElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location, stage]);
  
  const handleStart = () => {
    startQuiz();
  };
  
  const renderQuizContent = () => {
    switch (stage) {
      case "not_started":
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-6"
          >
            <div className="h-20 w-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                60-Second Loan Journey Assessment
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Answer 4 quick questions to get personalized recommendations for your specific student loan needs.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 my-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                <span>Save time researching</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                <span>Get tailored resources</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                <span>Skip irrelevant content</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={handleStart}
                className="px-6 py-6 text-lg shadow-md hover:shadow-lg"
              >
                Start Quick Assessment <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center text-sm text-gray-500">
              <ThumbsUp className="h-4 w-4 mr-1 text-green-500" /> 
              <span>Helped 10,000+ students find the right resources</span>
            </div>
          </motion.div>
        );
        
      case "in_progress":
        return <QuizQuestions />;
        
      case "completed":
        return <QuizResults />;
        
      default:
        return null;
    }
  };
  
  return (
    <section id="loan-journey-quiz" className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-12 right-8 hidden md:flex items-center"
            >
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm font-medium">
                Most popular tool
              </span>
              <ArrowDownRight className="h-5 w-5 text-yellow-500 ml-1" />
            </motion.div>
            
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <h2 className="text-xl font-bold text-gray-800">Student Loan Journey Quiz</h2>
                  </div>
                  
                  {stage === "completed" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={resetQuiz}
                      className="text-sm"
                    >
                      Take Again
                    </Button>
                  )}
                </div>
                
                <AnimatePresence mode="wait">
                  {renderQuizContent()}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
