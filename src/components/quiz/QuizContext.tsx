
import { createContext, useContext, useState, ReactNode } from "react";

// Define more specific journey stages for better resource matching
type QuizStage = "not_started" | "in_progress" | "completed";
type LoanJourneyStage = 
  | "research" 
  | "application" 
  | "comparison" 
  | "repayment" 
  | "forgiveness";

interface QuizContextType {
  stage: QuizStage;
  currentQuestion: number;
  answers: Record<string, any>;
  journeyStage: LoanJourneyStage | null;
  startQuiz: () => void;
  setAnswer: (questionId: string, answer: any) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  completeQuiz: () => void;
  resetQuiz: () => void;
}

const defaultContext: QuizContextType = {
  stage: "not_started",
  currentQuestion: 0,
  answers: {},
  journeyStage: null,
  startQuiz: () => {},
  setAnswer: () => {},
  nextQuestion: () => {},
  prevQuestion: () => {},
  completeQuiz: () => {},
  resetQuiz: () => {},
};

export const QuizContext = createContext<QuizContextType>(defaultContext);

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [stage, setStage] = useState<QuizStage>("not_started");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [journeyStage, setJourneyStage] = useState<LoanJourneyStage | null>(null);

  const startQuiz = () => {
    setStage("in_progress");
    setCurrentQuestion(0);
    setAnswers({});
    setJourneyStage(null);
  };

  const setAnswer = (questionId: string, answer: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => Math.max(0, prev - 1));
  };

  const completeQuiz = () => {
    // Determine the user's loan journey stage based on answers
    const stage = determineJourneyStage(answers);
    setJourneyStage(stage);
    setStage("completed");
  };

  const resetQuiz = () => {
    setStage("not_started");
    setCurrentQuestion(0);
    setAnswers({});
    setJourneyStage(null);
  };

  const determineJourneyStage = (answers: Record<string, any>): LoanJourneyStage => {
    // Enhanced logic to determine stage based on the new questions
    
    // First question: Where are you in your journey?
    const journeyPhase = answers.application_status || "";
    
    // Second question: Primary financial concern
    const financialConcern = answers.financial_need || "";
    
    // Third question: Loan type preference
    const loanType = answers.loan_type || "";
    
    // Fourth question: Specific goal
    const specificGoal = answers.specific_goal || "";

    // Enhanced decision tree
    if (journeyPhase === "research" || specificGoal === "understand") {
      return "research";
    } 
    
    if (journeyPhase === "application" || financialConcern === "maximize_aid") {
      return "application";
    }
    
    if (journeyPhase === "comparing" || loanType === "federal" || loanType === "private" || loanType === "parent") {
      return "comparison";
    }
    
    if (journeyPhase === "repayment" || specificGoal === "lower_payments" || specificGoal === "pay_less" || loanType === "refinancing") {
      return "repayment";
    }
    
    if (financialConcern === "forgiveness" || specificGoal === "qualify_forgiveness") {
      return "forgiveness";
    }
    
    // Default fallback
    return "research";
  };

  return (
    <QuizContext.Provider
      value={{
        stage,
        currentQuestion,
        answers,
        journeyStage,
        startQuiz,
        setAnswer,
        nextQuestion,
        prevQuestion,
        completeQuiz,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
