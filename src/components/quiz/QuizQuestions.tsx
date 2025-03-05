
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuiz } from "./QuizContext";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

// Enhanced quiz questions for more accuracy and targeted recommendations
const questions = [
  {
    id: "application_status",
    question: "Where are you in your student loan journey?",
    options: [
      { value: "research", label: "Researching loan options" },
      { value: "application", label: "Applying for financial aid or loans" },
      { value: "comparing", label: "Comparing loan offers" },
      { value: "repayment", label: "Managing or repaying existing loans" }
    ]
  },
  {
    id: "financial_need",
    question: "What's your most immediate financial concern?",
    options: [
      { value: "maximize_aid", label: "Getting the most financial aid possible" },
      { value: "low_rates", label: "Finding the lowest interest rates" },
      { value: "repayment_options", label: "Understanding repayment options" },
      { value: "forgiveness", label: "Qualifying for loan forgiveness" }
    ]
  },
  {
    id: "loan_type",
    question: "Which type of loans are you most interested in?",
    options: [
      { value: "federal", label: "Federal student loans" },
      { value: "private", label: "Private student loans" },
      { value: "parent", label: "Parent PLUS loans" },
      { value: "refinancing", label: "Refinancing existing loans" }
    ]
  },
  {
    id: "specific_goal",
    question: "What specific outcome do you want to achieve?",
    options: [
      { value: "understand", label: "Understand which loans are best for me" },
      { value: "lower_payments", label: "Lower my monthly payments" },
      { value: "pay_less", label: "Pay less interest overall" },
      { value: "qualify_forgiveness", label: "See if I qualify for loan forgiveness" }
    ]
  }
];

export const QuizQuestions = () => {
  const { 
    currentQuestion, 
    answers, 
    setAnswer, 
    nextQuestion, 
    prevQuestion, 
    completeQuiz 
  } = useQuiz();
  
  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const currentAnswer = answers[question.id] || [];
  
  const handleOptionToggle = (value: string) => {
    setAnswer(question.id, updateSelections(value, currentAnswer));
  };
  
  // Helper function to handle multiple selections (up to 2)
  const updateSelections = (value: string, currentSelections: string[]) => {
    if (!Array.isArray(currentSelections)) {
      currentSelections = currentSelections ? [currentSelections] : [];
    }
    
    // If already selected, remove it
    if (currentSelections.includes(value)) {
      return currentSelections.filter(item => item !== value);
    } 
    // If not selected and we have less than 2 selections, add it
    else if (currentSelections.length < 2) {
      return [...currentSelections, value];
    } 
    // If we already have 2 selections, replace the first one (oldest)
    else {
      return [currentSelections[1], value];
    }
  };
  
  const isOptionSelected = (value: string) => {
    return Array.isArray(currentAnswer) && currentAnswer.includes(value);
  };
  
  const handleNext = () => {
    if (isLastQuestion) {
      completeQuiz();
    } else {
      nextQuestion();
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          {questions.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 ${index === currentQuestion ? 'w-8' : 'w-2'} rounded-full transition-all duration-300 ${index === currentQuestion 
                ? 'bg-blue-600' 
                : index < currentQuestion 
                  ? 'bg-green-500' 
                  : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          {question.question}
        </h3>
        <p className="text-gray-600 text-sm mb-1">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <p className="text-blue-600 text-xs font-medium">
          Select up to 2 options for more specific recommendations
        </p>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-col space-y-3">
          {question.options.map((option) => (
            <div 
              key={option.value}
              onClick={() => handleOptionToggle(option.value)}
              className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-all cursor-pointer
                ${isOptionSelected(option.value) 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-200'}`}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                isOptionSelected(option.value) 
                  ? 'border-blue-500 bg-blue-500 text-white' 
                  : 'border-gray-300'
              }`}>
                {isOptionSelected(option.value) && <CheckIcon className="h-3 w-3" />}
              </div>
              <label className="flex-grow cursor-pointer font-medium">
                {option.label}
              </label>
              {isOptionSelected(option.value) && (
                <CheckCircle className="h-5 w-5 text-blue-500" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex justify-between">
        {currentQuestion > 0 ? (
          <Button 
            variant="outline" 
            onClick={prevQuestion}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Previous
          </Button>
        ) : (
          <div></div>
        )}
        
        <Button 
          onClick={handleNext}
          disabled={Array.isArray(currentAnswer) ? currentAnswer.length === 0 : !currentAnswer}
          className={`flex items-center ${Array.isArray(currentAnswer) && currentAnswer.length === 0 ? 'opacity-50' : ''}`}
        >
          {isLastQuestion ? 'Get Personalized Recommendations' : 'Next'}
          {!isLastQuestion && <ArrowRight className="w-4 h-4 ml-1" />}
        </Button>
      </div>
    </motion.div>
  );
};
