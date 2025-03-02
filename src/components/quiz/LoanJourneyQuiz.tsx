
import { useState } from "react";
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
import { ArrowRight, MapPin, Target, ThumbsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const LoanJourneyQuiz = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { stage, startQuiz, resetQuiz } = useQuiz();
  
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
                Find Your Student Loan Path
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Take our quick 60-second assessment to get personalized guidance for your student loan journey.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={handleStart}
                className="px-6 py-6 text-lg"
              >
                Start Student Loan Quiz <ArrowRight className="ml-1 h-5 w-5" />
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
    </section>
  );
};
