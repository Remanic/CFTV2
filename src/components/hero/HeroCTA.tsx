
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { useState } from "react";
import { GuideForm } from "./GuideForm";
import { useQuiz } from "../quiz/QuizContext";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const HeroCTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { startQuiz } = useQuiz();
  const { toast } = useToast();

  const handleQuizClick = (e: React.MouseEvent) => {
    e.preventDefault();
    startQuiz();
    const quizSection = document.getElementById("loan-journey-quiz");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center mt-4 sm:mt-6 mb-2 w-full">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <div className="flex flex-col xs:flex-row gap-3 w-full justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full xs:w-auto max-w-xs xs:max-w-none"
            >
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 hover:scale-102 shadow-lg hover:shadow-xl 
                    transition-all text-base sm:text-lg md:text-xl px-4 sm:px-8 py-4 sm:py-6 h-auto 
                    rounded-full w-full"
                >
                  <span className="xs:hidden">Get Your Free Loan Guide</span>
                  <span className="hidden xs:inline">Claim Your Free Student Loan Guide</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                </Button>
              </DialogTrigger>
            </motion.div>
          </div>
          
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900">Get Your Free Student Loan Guide</DialogTitle>
              <DialogDescription className="text-gray-600 text-sm sm:text-base">
                We'll send a comprehensive student loan guide tailored to your needs directly to your inbox.
              </DialogDescription>
            </DialogHeader>
            <GuideForm onClose={() => setDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xs sm:text-sm text-amber-600 mt-2 font-medium"
      >
        Free for a limited time - No credit card required
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-wrap justify-center gap-4 mt-3"
      >
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
          <span className="font-medium text-xs sm:text-sm">Data protected & secure</span>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
          <span className="font-medium text-xs sm:text-sm">Created by certified financial advisors</span>
        </div>
      </motion.div>
    </div>
  );
};
