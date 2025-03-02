
import { Star, ChevronLeft, ChevronRight, DollarSign, GraduationCap, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface TestimonialSectionProps {
  currentTestimonial: number;
}

// Enhanced testimonials with specific details and savings amounts
const testimonials = [
  {
    quote: "The loan comparison tool saved me $5,280 in interest by helping me find a lender with 1.5% lower rates.",
    author: "Sarah M.",
    role: "UCLA Graduate",
    rating: 5,
    icon: DollarSign,
    saving: "$5,280 saved"
  },
  {
    quote: "I switched to an income-based repayment plan and lowered my monthly payments by $180, making budgeting so much easier.",
    author: "Michael K.",
    role: "NYU Graduate Student",
    rating: 5,
    icon: GraduationCap,
    saving: "$180/month saved"
  },
  {
    quote: "Thanks to the PSLF calculator, I discovered I was eligible for complete loan forgiveness after 7 years of payments I'd already made.",
    author: "Jessica R.",
    role: "Medical Resident",
    rating: 5,
    icon: Clock,
    saving: "3 years of payments saved"
  },
  {
    quote: "The FAFSA guide helped me unlock $8,500 more in grants that I didn't know I qualified for. Worth every minute spent!",
    author: "David L.",
    role: "First-Year Undergraduate",
    rating: 5,
    icon: DollarSign,
    saving: "$8,500 additional aid"
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

  // Handle swipe gestures for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      goToNextTestimonial();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swiped right
      goToPrevTestimonial();
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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

        <div className="relative min-h-[220px]">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
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
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-400" fill="#facc15" />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        {testimonial.saving}
                      </span>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
