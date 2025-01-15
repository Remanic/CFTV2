import { ArrowRight, Clock, CheckCircle2, BookOpen, Calculator, PiggyBank, Star, GraduationCap, DollarSign, Search, Building, Shield } from "lucide-react";
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
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Urgency Banner */}
            <div className="bg-warning/10 rounded-full px-6 py-2 inline-flex items-center justify-center lg:justify-start gap-2 text-warning font-semibold">
              <Clock className="h-5 w-5" />
              <span>Act Now: Free Premium Access Ends {formatTime(timeLeft)}</span>
            </div>
            
            <div className="space-y-4">

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                Your Complete Student Loan Solution
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm md:text-base font-medium">
                    <GraduationCap className="h-4 w-4" />
                    <span>Navigate FAFSA</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-sm md:text-base font-medium">
                    <Search className="h-4 w-4" />
                    <span>Find Best Loans</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-3 py-1.5 rounded-full text-sm md:text-base font-medium">
                    <Star className="h-4 w-4" />
                    <span>Maximize Aid</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm md:text-base font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Simplify Repayment</span>
                  </div>
                </div>
                <span className="block text-base md:text-lg text-gray-600 mt-3 font-normal">
                  All in One Place
                </span>
              </h1>

              {/* Emotional Hook */}
              <p className="text-lg text-gray-600 italic">
                Say goodbye to loan stress and confusion – start your journey to financial freedom today.
              </p>

              {/* Trust Badge */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">Trusted by over 10,000 students and parents</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                Get Your Free Personalized Loan Plan <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Explore All Tools for Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Benefits Grid with Enhanced Visual Hierarchy */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 rounded-xl bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
                >
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
                      className={`text-center p-4 rounded-lg transition-all duration-300 ${
                        activeStep === index 
                          ? 'bg-primary/10 shadow-md' 
                          : 'hover:bg-gray-50 hover:shadow-sm'
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

            {/* Enhanced Testimonial Section */}
            <div className="bg-gradient-to-r from-warning/10 via-warning/20 to-warning/10 rounded-lg p-6 border border-warning/20">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-6 w-6 text-warning" />
                <h3 className="text-lg font-semibold text-gray-900">Student Success Stories</h3>
              </div>
              <div className="relative overflow-hidden" style={{ height: '140px' }}>
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
                        className="w-16 h-16 rounded-full object-cover border-2 border-warning/20"
                      />
                      <div>
                        <p className="text-gray-700 italic text-sm leading-relaxed">{testimonial.quote}</p>
                        <div className="mt-2 text-sm font-medium text-gray-900">
                          - {testimonial.author}, <span className="text-gray-600">{testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center items-center gap-6 bg-white/50 rounded-lg p-4">
              <img src="/placeholder.svg" alt="Partner Logo" className="h-10 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="/placeholder.svg" alt="Partner Logo" className="h-10 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="/placeholder.svg" alt="Partner Logo" className="h-10 opacity-50 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
