
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ClipboardList, 
  Search, 
  Calculator, 
  ClipboardCheck, 
  Calendar, 
  Star, 
  TrendingUp, 
  ArrowRight, 
  Target 
} from "lucide-react";
import { useQuiz } from "./quiz/QuizContext";
import { motion } from "framer-motion";

export const FafsaGuide = () => {
  const { startQuiz } = useQuiz();
  
  const handleStartQuiz = () => {
    startQuiz();
    // Find and scroll to quiz section
    const quizElement = document.getElementById("loan-journey-quiz");
    if (quizElement) {
      quizElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section 
      id="fafsa-guide" 
      className="py-16 bg-purple-50"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Complete FAFSA Guide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about the Free Application for Federal Student Aid (FAFSA).
          </p>
          
          <div className="mt-4 inline-flex items-center justify-center">
            <Button 
              variant="outline" 
              onClick={handleStartQuiz}
              className="text-sm border-purple-300 text-purple-800 hover:bg-purple-100"
            >
              <Target className="mr-2 h-4 w-4" />
              Not sure where to start? Take our quick quiz
            </Button>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={item}
            className="bg-white p-6 rounded-xl shadow-md border border-purple-100 flex flex-col relative"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute -top-3 -right-3 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
              Popular
            </div>
            <div className="mb-4 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
              <ClipboardList className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">FAFSA Application Guide</h3>
            <p className="text-gray-600 mb-6 flex-grow">Step-by-step instructions to complete your FAFSA application correctly the first time.</p>
            <Link 
              to="/fafsa-application-guide" 
              state={{ from: "/", section: "fafsa-guide" }}
              className="inline-block"
            >
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Start the Guide <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-white p-6 rounded-xl shadow-md border border-purple-100 flex flex-col"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="mb-4 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
              <ClipboardCheck className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Review & Understand</h3>
            <p className="text-gray-600 mb-6 flex-grow">Learn how to check your FAFSA status, review your submission, and understand your aid offers.</p>
            <Link 
              to="/fafsa-review-guide" 
              state={{ from: "/", section: "fafsa-guide" }}
              className="inline-block"
            >
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Review Guide
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white p-6 rounded-xl shadow-md border border-purple-100 flex flex-col relative"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute -top-3 -right-3 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
              Popular
            </div>
            <div className="mb-4 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Calculator className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Estimate Your Federal Aid</h3>
            <p className="text-gray-600 mb-6 flex-grow">Get a quick estimate of how much federal student aid you might receive before you apply.</p>
            <Link 
              to="/fafsa-aid-calculator" 
              state={{ from: "/", section: "fafsa-guide" }}
              className="inline-block"
            >
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Calculate Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto"
        >
          <motion.div 
            variants={item}
            className="bg-white p-6 rounded-xl shadow-md border border-purple-100 flex flex-col"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="mb-4 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">2024-2025 Deadlines Complete Guide</h3>
            <p className="text-gray-600 mb-6 flex-grow">Critical FAFSA submission deadlines for federal and state aid for this academic year.</p>
            <div className="grid grid-cols-2 gap-3">
              <Link 
                to="/fafsa-deadlines" 
                state={{ from: "/", section: "fafsa-guide" }}
                className="inline-block"
              >
                <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                  2024 Deadlines
                </Button>
              </Link>
              <Link 
                to="/fafsa-deadlines-2025" 
                state={{ from: "/", section: "fafsa-guide" }}
                className="inline-block"
              >
                <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                  2025 Deadlines
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-white p-6 rounded-xl shadow-md border border-purple-100 flex flex-col"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="mb-4 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Search className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Find State Deadlines</h3>
            <p className="text-gray-600 mb-6 flex-grow">Don't miss out on state aid. Find FAFSA state submission deadlines that may differ from federal ones.</p>
            <Link 
              to="/fafsa-state-deadlines" 
              state={{ from: "/", section: "fafsa-guide" }}
              className="inline-block"
            >
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Find My Deadlines
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link to="/fafsa-guide" className="inline-flex items-center text-purple-700 hover:text-purple-800">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">View all FAFSA resources</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
