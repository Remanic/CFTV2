import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is PSLF taxable?",
    answer: "No, loan forgiveness under PSLF is not considered taxable income."
  },
  {
    question: "Does my job title matter?",
    answer: "No, eligibility depends on your employer, not your specific job title."
  },
  {
    question: "Can part-time work qualify?",
    answer: "Yes, if you work multiple part-time jobs for qualifying employers totaling at least 30 hours per week."
  },
  {
    question: "What if I switch jobs?",
    answer: "Ensure your new employer qualifies and submit a new PSLF Form. Previous qualifying payments still count."
  },
  {
    question: "Do I need to make consecutive payments?",
    answer: "No, the 120 qualifying payments do not need to be consecutive."
  },
  {
    question: "What happens if I miss a payment?",
    answer: "Missed payments don't count toward PSLF, but you can resume making qualifying payments without losing previous progress."
  },
  {
    question: "Can I make payments during deferment or forbearance?",
    answer: "Payments made during deferment or forbearance typically don't count, except under certain COVID-19 relief measures."
  },
  {
    question: "What if my loan servicer changes?",
    answer: "Keep all documentation and payment records. Your progress should transfer automatically, but verify with the new servicer."
  }
];

export const FaqSection = () => {
  return (
    <section id="faqs" className="scroll-mt-20 mt-12">
      <h2 className="text-2xl font-bold mb-6">5. FAQs</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`} className="bg-white border rounded-lg">
            <AccordionTrigger className="px-4 hover:no-underline">
              <span className="text-left font-medium">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};