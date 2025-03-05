
import { motion } from "framer-motion";

export const QuizHeader = () => {
  return (
    <div className="text-center mb-6">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        Your Personalized Resources
      </h3>
      <p className="text-gray-600">
        Based on your answers, we've selected these resources to help you on your student loan journey.
      </p>
    </div>
  );
};
