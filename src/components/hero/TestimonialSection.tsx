
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialSectionProps {
  currentTestimonial: number;
}

const TestimonialSection = ({ currentTestimonial }: TestimonialSectionProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-100 shadow-sm">
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-warning" fill="#facc15" />
            ))}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Student Success Stories</h3>
        </div>

        <div className="relative" style={{ minHeight: '160px' }}>
          {[
            {
              quote: "CashFlowTime showed me how to save over $5,000 in interest and get on a repayment plan that works for me!",
              author: "Sarah M.",
              role: "Recent Graduate",
            },
            {
              quote: "I was overwhelmed by repayment options until I found this resource. Now I'm confidently managing my loans!",
              author: "Michael K.",
              role: "Graduate Student",
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "absolute w-full transition-all duration-500",
                index === currentTestimonial
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0'
              )}
            >
              <div className="relative">
                <Quote className="absolute -left-2 -top-2 h-8 w-8 text-primary/10 rotate-180" />
                <div className="pl-6">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.author[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1].map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === currentTestimonial
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-gray-200"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
