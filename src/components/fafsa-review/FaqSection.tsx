import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take for FAFSA to process?",
    answer: "Processing typically takes 3–5 business days for online submissions and up to 10 days for mailed forms."
  },
  {
    question: "What does 'Action Required' mean?",
    answer: "It indicates missing or incorrect information. Log in to review and address the issue immediately."
  },
  {
    question: "Can I check my FAFSA status without an FSA ID?",
    answer: "No, an FSA ID is required to access your FAFSA status online. If you don't have one, you can create it on the StudentAid.gov website."
  },
  {
    question: "Can I update my FAFSA after submitting it?",
    answer: "Yes, corrections can be made until the federal deadline (June 30 for the academic year)."
  },
  {
    question: "What if my school deadline is earlier than the federal deadline?",
    answer: "Submit corrections before your school's deadline to avoid aid delays."
  },
  {
    question: "Can I add more schools to my FAFSA after submitting?",
    answer: "Yes, you can add up to 10 schools at a time by logging into your FAFSA account and making corrections."
  },
  {
    question: "What does EFC/SAI mean?",
    answer: "It's a measure of your family's financial strength. Schools use it to calculate your aid eligibility."
  },
  {
    question: "What if my SAR shows a 'flagged' item?",
    answer: "Log in to your FAFSA and correct the flagged issue or contact your school's financial aid office for guidance."
  },
  {
    question: "Is my SAR the same as my financial aid package?",
    answer: "No, the SAR is a summary of your FAFSA information. Financial aid packages are determined by individual schools based on your SAR."
  }
];

export const FaqSection = () => {
  return (
    <section id="faqs" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">4. Frequently Asked Questions</h2>
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