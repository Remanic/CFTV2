
import { useQuiz } from "./QuizContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { useState } from "react";
import { QuizHeader } from "./QuizHeader";
import { ResourceList } from "./ResourceList";
import { getPersonalizedResources } from "./ResourceGenerator";

export const QuizResults = () => {
  const { journeyStage, resetQuiz, answers } = useQuiz();
  const [expanded, setExpanded] = useState(false);
  
  const resources = getPersonalizedResources(journeyStage, answers, expanded);
  const hasMoreResources = !expanded && getPersonalizedResources(journeyStage, answers, true).length > 4;
  
  // Helper function to handle navigation to anchor links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetLink: string) => {
    e.preventDefault();
    
    if (targetLink.startsWith('#')) {
      const targetElement = document.getElementById(targetLink.replace('#', ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For page navigation
      window.location.href = targetLink;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full"
    >
      <QuizHeader />
      
      <ResourceList 
        resources={resources}
        hasMoreResources={hasMoreResources}
        setExpanded={setExpanded}
        handleLinkClick={handleLinkClick}
      />
      
      <div className="mt-8 text-center">
        <Button 
          variant="ghost" 
          onClick={resetQuiz}
          className="text-gray-600 hover:text-blue-600"
        >
          <RefreshCw className="h-4 w-4 mr-1" /> Take quiz again
        </Button>
      </div>
    </motion.div>
  );
};
