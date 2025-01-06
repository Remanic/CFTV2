interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQ[];
}

export const FAQSection = ({ title, faqs }: FAQSectionProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <p className="font-medium text-gray-900">{faq.question}</p>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};