import { ArrowRight, Clock, Hourglass, CheckCircle2, BookOpen, Calculator, PiggyBank, Star } from "lucide-react";
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

  const steps = [
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
  ];

  const testimonials = [
    {
      quote: "This guide helped me save over $5,000 in interest and choose the perfect repayment plan for my situation!",
      author: "Sarah M.",
      role: "Recent Graduate",
      image: "/placeholder.svg"
    },
    {
      quote: "I was overwhelmed by repayment options until I found this resource. Now I'm confidently managing my loans!",
      author: "Michael K.",
      role: "Graduate Student",
      image: "/placeholder.svg"
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
              <Clock className="h-5 w-5 text-gray-700" />
              <span>Offer Expires Soon - Limited Time Access</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                Break Free from Student Loan Stress
                <span className="block text-primary mt-2">Start Your Debt-Free Journey Today</span>
              </h1>
              
              <div className="flex flex-wrap gap-4 text-lg text-gray-600 justify-center lg:justify-start">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Confused about repayment plans?
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Struggling with high interest?
                </span>
              </div>
            </div>

            <p className="text-lg lg:text-xl text-gray-600">
              Join over 50,000 students who've saved an average of $5,000 in interest using our expert guidance and tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                Get Expert Tips & Save $1000s <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Find Best Plan in 60 Seconds
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                    <Star className="h-4 w-4 text-warning" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600">Trusted by 50,000+ Students</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Your Journey to Financial Freedom</h3>
                <Progress value={progress} className="h-2" />
                <div className="grid grid-cols-3 gap-4">
                  {steps.map((step, index) => (
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
                <Hourglass className="h-6 w-6 text-warning" />
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