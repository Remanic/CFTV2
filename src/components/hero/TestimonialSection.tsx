import { Star } from "lucide-react";

interface TestimonialSectionProps {
  currentTestimonial: number;
}

const TestimonialSection = ({ currentTestimonial }: TestimonialSectionProps) => {
  return (
    <div className="bg-gradient-to-r from-warning/10 via-warning/20 to-warning/10 rounded-lg p-6 border border-warning/20">
      <div className="flex items-center gap-3 mb-4">
        <Star className="h-6 w-6 text-warning" />
        <h3 className="text-lg font-semibold text-gray-900">Student Success Stories</h3>
      </div>
      <div className="relative overflow-hidden" style={{ height: '140px' }}>
        {[
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
        ].map((testimonial, index) => (
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
  );
};

export default TestimonialSection;