
import { useQuiz } from "./QuizContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { QuizHeader } from "./QuizHeader";
import { ResourceList } from "./ResourceList";
import { getPersonalizedResources } from "./ResourceGenerator";
import { useNavigate, useLocation } from "react-router-dom";

export const QuizResults = () => {
  const { journeyStage, resetQuiz, answers } = useQuiz();
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const resources = getPersonalizedResources(journeyStage, answers, expanded);
  const hasMoreResources = !expanded && getPersonalizedResources(journeyStage, answers, true).length > 6;
  
  // Helper function to handle navigation to anchor links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetLink: string) => {
    e.preventDefault();
    
    if (targetLink.startsWith('#')) {
      // For anchor links on the same page
      const targetElement = document.getElementById(targetLink.replace('#', ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (targetLink.startsWith('/')) {
      // For internal page navigation
      // Store the current quiz state in sessionStorage before navigating
      sessionStorage.setItem('quizState', JSON.stringify({
        journeyStage,
        answers,
        expanded
      }));
      
      // Navigate to the new page
      navigate(targetLink, { state: { fromQuiz: true } });
    } else {
      // For external links, open in new tab
      window.open(targetLink, '_blank', 'noopener,noreferrer');
    }
  };
  
  // When returning to the page, restore the quiz state if coming back from another page
  useEffect(() => {
    const storedQuizState = sessionStorage.getItem('quizState');
    const isReturningFromPage = location.state?.fromQuiz === true;
    
    if (storedQuizState && isReturningFromPage) {
      try {
        const parsedState = JSON.parse(storedQuizState);
        if (parsedState.expanded !== undefined) {
          setExpanded(parsedState.expanded);
        }
      } catch (error) {
        console.error("Error parsing stored quiz state:", error);
      }
      
      // Clean up location state
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full"
    >
      <QuizHeader />
      
      <div className="mb-4 px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          <span className="font-medium">Based on your answers</span>, we've selected {resources.length} resources tailored to your needs.
          Click on any resource to view it.
        </p>
      </div>
      
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
