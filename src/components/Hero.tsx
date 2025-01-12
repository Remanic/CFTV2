import { ArrowRight, Clock, Hourglass, CheckCircle2, BookOpen, Calculator, PiggyBank, Star, GraduationCap, DollarSign, Search, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const benefits = [
    {
      title: "FAFSA Aid Estimator",
      description: "Know how much aid you qualify for",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Repayment Calculator",
      description: "Compare options and pick the best plan",
      icon: <DollarSign className="h-6 w-6 text-primary" />,
    },
    {
      title: "Loan Forgiveness Insights",
      description: "Find out if you're eligible",
      icon: <Search className="h-6 w-6 text-primary" />,
    },
    {
      title: "Private Lender Comparison",
      description: "Rates, pros & cons, all in one place",
      icon: <Building className="h-6 w-6 text-primary" />,
    },
  ];

  const testimonials = [
    {
      quote: "CashFlowTime showed me how to save over $5,000 in interest and get on a repayment plan that works for me!",
      author: "Sarah M.",
      role: "Recent Graduate",
      image: "/photo-1581091226825-a6a2a5aee158"
    },
    {
      quote: "I was overwhelmed by repayment options until I found this resource. Now I'm confidently managing my loans!",
      author: "Michael K.",
      role: "Graduate Student",
      image: "/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-warning font-semibold">
              <Clock className="h-5 w-5" />
              <span>Limited Time – Get Free Access to Premium Tools & Expert Guidance Today</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                Your Complete Student Loan Solution
                <span className="block text-lg md:text-xl text-gray-600 mt-4">
                  Navigate FAFSA, Find the Best Loan Plans, Maximize Aid, and Simplify Repayment – All in One Place
                </span>
              </h1>
              
              <p className="text-lg text-gray-600">
                Used by students and parents to save thousands on interest and reduce loan stress.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                Get Your Free Personalized Loan Plan <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Explore All Tools for Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Your Journey to Financial Freedom</h3>
                <Progress value={progress} className="h-2" />
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      title: "Get Free Guide",
                      description: "Expert tips to reduce your loan burden",
                      icon: <BookOpen className="h-6 w-6 text-primary" />,
                    },
                    {
                      title: "Calculate Savings",
                      description: "Find your ideal repayment plan",
                      icon: <Calculator className="h-6 w-6 text-primary" />,
                    },
                    {
                      title: "Start Saving",
                      description: "Begin your debt-free journey",
                      icon: <PiggyBank className="h-6 w-6 text-primary" />,
                    },
                  ].map((step, index) => (
                    <button
                      key={index}
                      className={`text-center p-4 rounded-lg transition-colors ${
                        activeStep === index ? 'bg-primary/10' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                    >
                      {step.icon}
                      <div className="text-primary font-semibold mt-2">{step.title}</div>
                      {activeStep === index && (
                        <div className="text-sm text-gray-600 mt-2 animate-fade-in">
                          {step.description}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-warning/10 via-warning/20 to-warning/10 rounded-lg p-6 border border-warning/20">
              <div className="flex items-center gap-3 mb-3">
                <Star className="h-6 w-6 text-warning" />
                <h3 className="text-lg font-semibold text-gray-900">Student Success Stories</h3>
              </div>
              <div className="relative overflow-hidden" style={{ height: '120px' }}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute w-full transition-all duration-500 ${
                      index === currentTestimonial
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-full opacity-0'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-gray-700 italic">{testimonial.quote}</p>
                        <div className="mt-2 text-sm text-gray-600">
                          - {testimonial.author}, {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <img src="/placeholder.svg" alt="Partner Logo" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="/placeholder.svg" alt="Partner Logo" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="/placeholder.svg" alt="Partner Logo" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};