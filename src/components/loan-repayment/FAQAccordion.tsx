
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQAccordion = () => {
  const faqs = [
    {
      question: "Who is eligible for an IDR plan?",
      answer: "Most federal student loan borrowers are eligible for at least one IDR plan. However, each plan has specific requirements. For example, PAYE is only available to borrowers who took out loans after 2007. Parent PLUS loans are only eligible for ICR after consolidation."
    },
    {
      question: "Can I switch between different IDR plans?",
      answer: "Yes, you can switch plans if your financial situation changes. However, switching may affect your payment amount and forgiveness timeline."
    },
    {
      question: "What happens if my income changes?",
      answer: "You must recertify your income and family size every year. If your income drops, your payments could decrease. If it increases, your payments may go up, but they'll never exceed the standard 10-year repayment amount."
    },
    {
      question: "Is there loan forgiveness under IDR plans?",
      answer: "Yes! After 20-25 years of payments (depending on the plan), your remaining balance is forgiven. If you work in public service, you may qualify for forgiveness after just 10 years through the Public Service Loan Forgiveness (PSLF) program."
    },
    {
      question: "How does marriage affect my IDR plan?",
      answer: "For most plans, if you file taxes jointly, your spouse's income will be considered in your payment calculation. However, under the SAVE plan, if you file separately, only your income is considered."
    },
    {
      question: "What are the pros and cons of IDR plans?",
      answer: `Pros: Lower payments, potential for $0 payments, loan forgiveness, and credit protection.\n\nCons: Longer repayment terms mean you may pay more interest over time. Forgiveness may also be taxable.`
    },
    {
      question: "How does the recent legal situation affect IDR plans?",
      answer: "As of 2024, the SAVE plan has faced legal challenges, and some features are temporarily blocked. However, other IDR plans like PAYE, IBR, and ICR are still available. Stay updated by checking StudentAid.gov."
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
