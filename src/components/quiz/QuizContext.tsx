
import { createContext, useContext, useState, ReactNode } from "react";

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
    // Logic to determine which stage the user is in based on their answers
    
    // Q1: Have you started the loan application process?
    const hasStartedApplication = answers.application_status === "yes";
    
    // Q2: Are you comparing different loan options?
    const isComparingLoans = answers.comparing_loans === "yes";
    
    // Q3: Do you already have student loans you're repaying?
    const hasExistingLoans = answers.existing_loans === "yes";
    
    // Q4: Are you interested in loan forgiveness options?
    const interestedInForgiveness = answers.forgiveness_interest === "yes";

    // Simple decision tree
    if (interestedInForgiveness && hasExistingLoans) {
      return "forgiveness";
    } else if (hasExistingLoans) {
      return "repayment";
    } else if (isComparingLoans) {
      return "comparison";
    } else if (hasStartedApplication) {
      return "application";
    } else {
      return "research";
    }
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
