
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

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

  // Load persisted state from localStorage on initial render
  useEffect(() => {
    try {
      const persistedState = localStorage.getItem('quizPersistedState');
      if (persistedState) {
        const { stage: savedStage, answers: savedAnswers, journeyStage: savedJourneyStage } = JSON.parse(persistedState);
        
        if (savedStage) setStage(savedStage);
        if (savedAnswers) setAnswers(savedAnswers);
        if (savedJourneyStage) setJourneyStage(savedJourneyStage);
      }
    } catch (error) {
      console.error("Error loading persisted quiz state:", error);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (stage !== "not_started") {
      try {
        localStorage.setItem('quizPersistedState', JSON.stringify({
          stage,
          answers,
          journeyStage
        }));
      } catch (error) {
        console.error("Error saving quiz state to localStorage:", error);
      }
    }
  }, [stage, answers, journeyStage]);

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
    localStorage.removeItem('quizPersistedState');
    sessionStorage.removeItem('quizState');
  };

  const determineJourneyStage = (answers: Record<string, any>): LoanJourneyStage => {
    // Enhanced logic to determine stage based on multiple selections
    
    // First question: Where are you in your journey?
    const journeyPhases = Array.isArray(answers.application_status) 
      ? answers.application_status 
      : answers.application_status ? [answers.application_status] : [];
    
    // Second question: Primary financial concern
    const financialConcerns = Array.isArray(answers.financial_need) 
      ? answers.financial_need 
      : answers.financial_need ? [answers.financial_need] : [];
    
    // Third question: Loan type preference
    const loanTypes = Array.isArray(answers.loan_type) 
      ? answers.loan_type 
      : answers.loan_type ? [answers.loan_type] : [];
    
    // Fourth question: Specific goal
    const specificGoals = Array.isArray(answers.specific_goal) 
      ? answers.specific_goal 
      : answers.specific_goal ? [answers.specific_goal] : [];

    // Enhanced decision tree with scoring system for multiple selections
    let stageScores = {
      research: 0,
      application: 0,
      comparison: 0,
      repayment: 0,
      forgiveness: 0
    };

    // Score based on journey phase
    if (journeyPhases.includes("research")) stageScores.research += 2;
    if (journeyPhases.includes("application")) stageScores.application += 2;
    if (journeyPhases.includes("comparing")) stageScores.comparison += 2;
    if (journeyPhases.includes("repayment")) stageScores.repayment += 2;

    // Score based on financial concerns
    if (financialConcerns.includes("maximize_aid")) stageScores.application += 1;
    if (financialConcerns.includes("low_rates")) stageScores.comparison += 1;
    if (financialConcerns.includes("repayment_options")) stageScores.repayment += 1;
    if (financialConcerns.includes("forgiveness")) stageScores.forgiveness += 2;

    // Score based on loan types
    if (loanTypes.includes("federal")) stageScores.comparison += 1;
    if (loanTypes.includes("private")) stageScores.comparison += 1;
    if (loanTypes.includes("parent")) stageScores.comparison += 1;
    if (loanTypes.includes("refinancing")) stageScores.repayment += 1;

    // Score based on specific goals
    if (specificGoals.includes("understand")) stageScores.research += 1;
    if (specificGoals.includes("lower_payments")) stageScores.repayment += 1;
    if (specificGoals.includes("pay_less")) stageScores.repayment += 1;
    if (specificGoals.includes("qualify_forgiveness")) stageScores.forgiveness += 2;

    // Determine the highest scoring stage
    let highestScore = 0;
    let highestStage: LoanJourneyStage = "research"; // Default

    Object.entries(stageScores).forEach(([stage, score]) => {
      if (score > highestScore) {
        highestScore = score;
        highestStage = stage as LoanJourneyStage;
      }
    });

    return highestStage;
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
