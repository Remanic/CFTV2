import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I update my FAFSA after submitting it?",
    answer: "Yes, log in to make corrections or add schools."
  },
  {
    question: "What if my parents won't provide financial information?",
    answer: "Talk to your school's financial aid office about applying as an independent student or other options."
  },
  {
    question: "Do I need to submit the FAFSA every year?",
    answer: "Yes, you must reapply for each academic year."
  },
  {
    question: "How do I check my FAFSA status?",
    answer: "Log in at StudentAid.gov and click \"View FAFSA Status.\""
  },
  {
    question: "What should I do if my financial situation changes after filing?",
    answer: "Contact the financial aid offices at your schools for help updating your application."
  },
  {
    question: "Do I need to report my savings and investments?",
    answer: "Yes, include current balances for all accounts and investments when submitting the FAFSA."
  },
  {
    question: "Who qualifies as a contributor?",
    answer: "A contributor is someone who provides financial information on your FAFSA, like a parent or spouse. They must create their own FSA ID to sign the application."
  },
  {
    question: "Can I list more than one school on my FAFSA?",
    answer: "Yes, you can list up to 20 schools online or 10 on the paper form."
  },
  {
    question: "What if my parents are divorced?",
    answer: "Provide information for the parent you lived with most in the past year. If equal, use the parent who provided the most financial support."
  },
  {
    question: "Can I use the same FSA ID for multiple FAFSAs?",
    answer: "Yes, you can use the same FSA ID for multiple applications if you're a parent completing FAFSAs for different children."
  }
];

export const FaqSection = () => {
  return (
    <section id="faqs" className="scroll-mt-20">
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