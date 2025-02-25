
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const GraduatedFAQAccordion = () => {
  const faqs = [
    {
      question: "Who qualifies for the Graduated Repayment Plan?",
      answer: "Anyone with federal student loans (Direct, FFEL, or Consolidation) can enroll—no income criteria apply."
    },
    {
      question: "How often do payments go up?",
      answer: "Payments typically adjust upward every two years. Your servicer will outline the exact schedule."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can switch plans anytime by notifying your servicer, though exiting an IDR plan might affect forgiveness options."
    },
    {
      question: "Does this plan offer loan forgiveness?",
      answer: "No, forgiveness isn't available under this plan. For forgiveness, explore IDR plans or Public Service Loan Forgiveness (PSLF)."
    },
    {
      question: "How does it differ from the Standard Plan?",
      answer: "Graduated Plan: Payments start low and rise over time.\nStandard Plan: Payments stay fixed throughout.\nBoth usually span 10 years, but the Graduated Plan may accrue slightly more interest due to lower initial payments."
    },
    {
      question: "What if my income doesn't grow as planned?",
      answer: "If payments become unaffordable, you can switch to an IDR plan for relief, though you might lose certain prior benefits."
    },
    {
      question: "Can I pay extra to finish faster?",
      answer: "Absolutely! Extra payments can be made anytime, penalty-free. Direct them to the principal to cut your balance quicker."
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`faq-${index}`} className="bg-white border rounded-lg">
          <AccordionTrigger className="px-4 hover:no-underline">
            <span className="text-left font-medium">{faq.question}</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-600 whitespace-pre-line">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
