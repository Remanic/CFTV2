
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface TestimonialSectionProps {
  currentTestimonial: number;
}

const testimonials = [
  {
    quote: "CashFlowTime showed me how to save over $5,000 in interest and get on a repayment plan that works for me!",
    author: "Sarah M.",
    role: "Recent Graduate",
    rating: 5
  },
  {
    quote: "I was overwhelmed by repayment options until I found this resource. Now I'm confidently managing my loans!",
    author: "Michael K.",
    role: "Graduate Student",
    rating: 5
  },
  {
    quote: "The loan comparison tool helped me find a lender with much better rates than I originally had. Saved thousands!",
    author: "Jessica R.",
    role: "Medical Student",
    rating: 5
  },
  {
    quote: "Their FAFSA guide made the application process so much easier. Highly recommend for first-time applicants!",
    author: "David L.",
    role: "Undergraduate Student",
    rating: 5
  }
];

const TestimonialSection = ({ currentTestimonial: initialTestimonial }: TestimonialSectionProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(initialTestimonial);
  
  // Update local state when prop changes
  useEffect(() => {
    setCurrentTestimonial(initialTestimonial);
  }, [initialTestimonial]);
  
  const goToNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const goToPrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-3">
            <button 
              onClick={goToPrevTestimonial}
              className="h-9 w-9 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={goToNextTestimonial}
              className="h-9 w-9 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Pagination dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={cn(
                  "h-2 rounded-full",
                  index === currentTestimonial
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-200 hover:bg-gray-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[200px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "absolute w-full",
                index === currentTestimonial
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-full pointer-events-none'
              )}
              style={{ 
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-xl">
                      {testimonial.author[0]}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400" fill="#facc15" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <span className="font-semibold text-gray-900 mr-2 font-playfair">
                      {testimonial.author}
                    </span>
                    <span className="text-gray-500">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
