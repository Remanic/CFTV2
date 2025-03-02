
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useQuiz } from "./QuizContext";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

// Define quiz questions - updated for more accuracy
const questions = [
  {
    id: "application_status",
    question: "Where are you in your student loan journey?",
    options: [
      { value: "research", label: "Researching loan options and FAFSA aid" },
      { value: "application", label: "Starting or completing applications" },
      { value: "comparing", label: "Comparing different loan offers" },
      { value: "repayment", label: "Managing existing loan repayments" }
    ]
  },
  {
    id: "financial_need",
    question: "What's your primary financial aid concern?",
    options: [
      { value: "maximize_aid", label: "Maximizing FAFSA financial aid" },
      { value: "low_rates", label: "Finding the lowest interest rates" },
      { value: "repayment_options", label: "Flexible repayment options" },
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
    question: "What specific outcome are you hoping to achieve?",
    options: [
      { value: "understand", label: "Understand loan options better" },
      { value: "lower_payments", label: "Lower my monthly payments" },
      { value: "pay_less", label: "Pay less interest overall" },
      { value: "qualify_forgiveness", label: "See if I qualify for forgiveness" }
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
  const currentAnswer = answers[question.id] || "";
  
  const handleOptionChange = (value: string) => {
    setAnswer(question.id, value);
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
              className={`h-2 w-2 rounded-full ${index === currentQuestion 
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
        <p className="text-gray-600 text-sm">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>
      
      <div className="mt-4">
        <RadioGroup 
          value={currentAnswer} 
          onValueChange={handleOptionChange}
          className="flex flex-col space-y-3"
        >
          {question.options.map((option) => (
            <div 
              key={option.value}
              className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-all
                ${currentAnswer === option.value 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-200'}`}
            >
              <RadioGroupItem value={option.value} id={option.value} className="ml-1" />
              <Label htmlFor={option.value} className="flex-grow cursor-pointer font-medium">
                {option.label}
              </Label>
              {currentAnswer === option.value && (
                <CheckCircle className="h-5 w-5 text-blue-500" />
              )}
            </div>
          ))}
        </RadioGroup>
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
          disabled={!currentAnswer}
          className={`flex items-center ${!currentAnswer ? 'opacity-50' : ''}`}
        >
          {isLastQuestion ? 'Get Recommendations' : 'Next'}
          {!isLastQuestion && <ArrowRight className="w-4 h-4 ml-1" />}
        </Button>
      </div>
    </motion.div>
  );
};
