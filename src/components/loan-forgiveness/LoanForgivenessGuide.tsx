import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const LoanForgivenessGuide = () => {
  const programs = [
    {
      title: "Public Service Loan Forgiveness (PSLF)",
      description: "For full-time employees at qualifying non-profit organizations or government agencies.",
      requirements: [
        "120 qualifying monthly payments",
        "Full-time employment at eligible organization",
        "Direct Loans or consolidated into Direct Loans"
      ]
    },
    {
      title: "Income-Driven Repayment (IDR) Forgiveness",
      description: "Forgiveness after 20-25 years of qualifying payments under IDR plans.",
      requirements: [
        "Enrollment in qualifying IDR plan",
        "Regular monthly payments",
        "20-25 years of payments depending on plan"
      ]
    },
    {
      title: "Teacher Loan Forgiveness",
      description: "Up to $17,500 in forgiveness for qualifying teachers.",
      requirements: [
        "5 complete and consecutive years teaching",
        "Employment at qualifying low-income school",
        "Meet subject area requirements"
      ]
    }
  ];

  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Latest Loan Forgiveness Programs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {programs.map((program, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700">Key Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {program.requirements.map((req, idx) => (
                      <li key={idx} className="text-gray-600">{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};