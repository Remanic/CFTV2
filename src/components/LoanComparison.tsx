import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, DollarSign, Users, FileText } from "lucide-react";

export const LoanComparison = () => {
  const loanGuides = [
    {
      title: "Federal Loans 101",
      icon: BookOpen,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      textColor: "text-blue-700",
      content: [
        {
          title: "What are Federal Student Loans?",
          description: "Federal student loans are funded by the federal government and offer benefits that private loans don't, including:",
          points: [
            "Fixed interest rates",
            "Income-driven repayment plans",
            "No credit check for most federal student loans",
            "Loan forgiveness opportunities",
            "Flexible deferment and forbearance options"
          ]
        },
        {
          title: "Types of Federal Loans",
          description: "Understanding the main types of federal student loans:",
          points: [
            "Direct Subsidized Loans - for undergraduate students with financial need",
            "Direct Unsubsidized Loans - for undergraduate and graduate students, no financial need required",
            "Direct PLUS Loans - for graduate students and parents",
            "Direct Consolidation Loans - combine multiple federal loans"
          ]
        }
      ]
    },
    {
      title: "Federal vs Private Loans",
      icon: DollarSign,
      color: "bg-green-50 hover:bg-green-100 border-green-200",
      textColor: "text-green-700",
      content: [
        {
          title: "Key Differences",
          description: "Understanding the major differences between federal and private student loans:",
          points: [
            "Federal loans have fixed interest rates; private loans may have variable rates",
            "Federal loans offer income-driven repayment; private loans typically don't",
            "Federal loans have forgiveness options; private loans rarely do",
            "Federal loans don't require credit checks (except PLUS loans); private loans do",
            "Federal loans have standardized terms; private loan terms vary by lender"
          ]
        },
        {
          title: "When to Consider Each Option",
          description: "Guidelines for choosing between federal and private loans:",
          points: [
            "Always exhaust federal loan options first",
            "Consider private loans only if federal loans don't cover all costs",
            "Compare multiple private lenders if needed",
            "Consider co-signer requirements and release options for private loans"
          ]
        }
      ]
    },
    {
      title: "Parent PLUS Loans",
      icon: Users,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      textColor: "text-purple-700",
      content: [
        {
          title: "Understanding Parent PLUS Loans",
          description: "Key features of Parent PLUS loans:",
          points: [
            "Available to parents of dependent undergraduate students",
            "Credit check required but less stringent than private loans",
            "Can borrow up to the full cost of attendance",
            "Fixed interest rates set annually",
            "Various repayment options available"
          ]
        },
        {
          title: "Application Process",
          description: "Steps to apply for a Parent PLUS loan:",
          points: [
            "Student must complete FAFSA",
            "Parent must pass credit check",
            "Complete Parent PLUS loan application on StudentAid.gov",
            "Sign Master Promissory Note (MPN)",
            "Complete loan counseling if required"
          ]
        }
      ]
    },
    {
      title: "Essential Student Information",
      icon: FileText,
      color: "bg-orange-50 hover:bg-orange-100 border-orange-200",
      textColor: "text-orange-700",
      content: [
        {
          title: "Before Borrowing",
          description: "Important considerations before taking out student loans:",
          points: [
            "Calculate the total cost of attendance",
            "Estimate future monthly payments",
            "Research career salary prospects",
            "Understand interest accrual and capitalization",
            "Consider work-study and scholarship opportunities"
          ]
        },
        {
          title: "Managing Your Loans",
          description: "Tips for responsible loan management:",
          points: [
            "Keep track of all loan servicers and amounts",
            "Understand grace periods and repayment start dates",
            "Consider auto-pay for interest rate reduction",
            "Stay informed about loan forgiveness programs",
            "Keep contact information updated with loan servicers"
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Understanding Federal Loan Types
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate your student loan options with confidence using our comprehensive guide to federal student loans.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {loanGuides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Card 
                key={index}
                className={`${guide.color} border-2 transition-colors duration-300`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`h-6 w-6 ${guide.textColor}`} />
                    <h3 className={`text-xl font-semibold ${guide.textColor}`}>
                      {guide.title}
                    </h3>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {guide.content.map((section, sectionIndex) => (
                      <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`}>
                        <AccordionTrigger className="text-left">
                          {section.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-3 text-gray-700">{section.description}</p>
                          <ul className="space-y-2">
                            {section.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start gap-2">
                                <span className="block w-2 h-2 mt-2 rounded-full bg-gray-400"></span>
                                <span className="text-gray-600">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};