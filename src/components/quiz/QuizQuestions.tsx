
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useQuiz } from "./QuizContext";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

// Define quiz questions
const questions = [
  {
    id: "application_status",
    question: "Have you started the FAFSA or loan application process yet?",
    options: [
      { value: "yes", label: "Yes, I've started the application process" },
      { value: "no", label: "No, I haven't started yet" },
      { value: "unsure", label: "I'm not sure how to begin" }
    ]
  },
  {
    id: "comparing_loans",
    question: "Are you currently comparing different student loan options?",
    options: [
      { value: "yes", label: "Yes, I'm evaluating different loans" },
      { value: "no", label: "No, I haven't reached that stage" },
      { value: "confused", label: "I'm confused about the different options" }
    ]
  },
  {
    id: "existing_loans",
    question: "Do you already have student loans you're repaying?",
    options: [
      { value: "yes", label: "Yes, I'm currently repaying loans" },
      { value: "soon", label: "Not yet, but I will be soon" },
      { value: "no", label: "No, I don't have any loans yet" }
    ]
  },
  {
    id: "forgiveness_interest",
    question: "Are you interested in learning about loan forgiveness programs?",
    options: [
      { value: "yes", label: "Yes, I want to know if I qualify" },
      { value: "maybe", label: "Maybe, I need more information" },
      { value: "no", label: "No, not at this time" }
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
