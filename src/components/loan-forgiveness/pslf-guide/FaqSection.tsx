import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is PSLF taxable?",
    answer: "No, loan forgiveness under PSLF is not taxable income."
  },
  {
    question: "Does my job title matter?",
    answer: "No, eligibility depends on your employer, not your job title."
  },
  {
    question: "How do I apply?",
    answer: "Use the PSLF Help Tool to complete and submit the form. Accuracy is crucial."
  },
  {
    question: "Can part-time work qualify?",
    answer: "Yes, if you work part-time for multiple qualifying employers, totaling at least 30 hours weekly."
  },
  {
    question: "Do deferred payments count?",
    answer: "No, only payments made during active repayment count."
  },
  {
    question: "What if I overpay?",
    answer: "Overpayments won't count as multiple payments but will reduce your balance."
  },
  {
    question: "What if I switch jobs?",
    answer: "Ensure your new employer qualifies and continue submitting forms promptly."
  },
  {
    question: "What happens if my employer's nonprofit status changes?",
    answer: "You must work for a qualifying employer at the time of each payment and during your application."
  },
  {
    question: "Can past payments count retroactively?",
    answer: "Yes, under certain conditions. Check for temporary waivers on StudentAid.gov."
  },
  {
    question: "What if my servicer changes?",
    answer: "Retain all communications and payment records to ensure a seamless transition."
  }
];

export const FaqSection = () => {
  return (
    <section id="faqs" className="scroll-mt-20 mt-12">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`} className="bg-white dark:bg-gray-800 border rounded-lg">
            <AccordionTrigger className="px-4 hover:no-underline">
              <span className="text-left font-medium">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-gray-600 dark:text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};