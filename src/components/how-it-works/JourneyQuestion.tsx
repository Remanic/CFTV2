
import { cn } from "@/lib/utils";

type JourneyQuestionProps = {
  question: string;
  className?: string;
};

export const JourneyQuestion = ({ question, className }: JourneyQuestionProps) => {
  return (
    <div className={cn("mb-6 text-center", className)}>
      <h3 className="text-lg md:text-xl font-semibold text-blue-700 px-6 py-3 rounded-lg bg-blue-50 inline-block shadow-sm border border-blue-200">
        {question}
      </h3>
    </div>
  );
};
