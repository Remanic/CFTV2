
import { Clock } from "lucide-react";
import { FeaturesList } from "./FeaturesList";
import { motion } from "framer-motion";
import { useQuiz } from "../quiz/QuizContext";

export const HeroHeading = () => {
  const { startQuiz } = useQuiz();
  
  const handleTakeQuizClick = (e: React.MouseEvent) => {
    e.preventDefault();
    startQuiz();
    const quizSection = document.getElementById("loan-journey-quiz");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="space-y-4">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
      >
        <Clock className="h-4 w-4 mr-1" />
        <span className="text-xs sm:text-sm">Students save an average of $3,200 with our guidance</span>
      </motion.div>

      <div className="space-y-3">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-sans"
        >
          Cut Through <span className="text-blue-600 relative inline-block font-playfair">
            Student Loan
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-blue-200 -rotate-1 origin-left"
            ></motion.span>
          </span> Confusion
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mt-2"
        >
          Lower payments, smarter choices, and avoid costly mistakes with personalized guidance.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <FeaturesList />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-4 py-2 px-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-100 max-w-xl mx-auto"
      >
        <p className="text-center text-sm text-purple-800 font-medium">
          <span className="font-semibold">Trusted by 10,000+ students</span> from 200+ universities nationwide
        </p>
      </motion.div>
    </div>
  );
};
