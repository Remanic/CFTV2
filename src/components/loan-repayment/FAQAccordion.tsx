
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQAccordion = () => {
  const faqs = [
    {
      question: "Who qualifies for IDR plans?",
      answer: "Most federal student loan borrowers are eligible for at least one plan. Parent PLUS loans need consolidation for ICR."
    },
    {
      question: "Can I switch IDR plans?",
      answer: "Yes, but switching might reset your forgiveness timeline."
    },
    {
      question: "What if my income rises?",
      answer: "Payments increase but are capped at the standard 10-year amount (except ICR)."
    },
    {
      question: "Is forgiveness automatic?",
      answer: "No—you must complete 240-300 qualifying payments and meet plan rules."
    },
    {
      question: "How does marriage impact my plan?",
      answer: "Filing taxes jointly includes your spouse's income (except SAVE, where filing separately excludes it)."
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
