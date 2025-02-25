
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const StandardFAQAccordion = () => {
  const faqs = [
    {
      question: "Who is eligible for the Standard Repayment Plan?",
      answer: "All federal student loan borrowers are eligible, regardless of income or loan type. This includes Direct Loans, FFEL Program Loans, and Consolidation Loans."
    },
    {
      question: "Can I change my repayment plan later?",
      answer: "Yes, you can switch to a different repayment plan at any time by contacting your loan servicer. However, if you switch from an IDR plan to the Standard Plan, you may lose access to forgiveness options."
    },
    {
      question: "What happens if I miss a payment?",
      answer: "Missing a payment can lead to late fees and negatively impact your credit score. If you're struggling to make payments, contact your servicer immediately to discuss options like deferment or forbearance."
    },
    {
      question: "Is there loan forgiveness under the Standard Repayment Plan?",
      answer: "No, the Standard Repayment Plan does not offer loan forgiveness. If you're seeking forgiveness, consider an IDR plan or the Public Service Loan Forgiveness (PSLF) program."
    },
    {
      question: "How does the Standard Plan compare to other repayment options?",
      answer: "Pros: Fixed payments, shorter repayment term, lower total interest.\nCons: Higher monthly payments compared to IDR plans, no forgiveness options."
    },
    {
      question: "Can I make extra payments to pay off my loan faster?",
      answer: "Yes! You can make additional payments at any time without penalty. Be sure to specify that the extra amount should go toward the principal to reduce your balance faster."
    },
    {
      question: "What if I have multiple loans?",
      answer: "If you have multiple federal loans, they can be consolidated into a single loan with a fixed interest rate. However, consolidation may extend your repayment term, increasing the total interest paid."
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
