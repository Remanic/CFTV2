import { BookOpen, CheckCircle, AlertCircle, HelpCircle, FileText, DollarSign, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FafsaGuide = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
            Master Your FAFSA Application
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join over 10 million students who use FAFSA annually to access federal financial aid. Let us guide you through the process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <span>Step-by-Step Guide</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Create your FSA ID</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Gather required documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Complete the FAFSA form</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-warning/10 hover:border-warning/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-warning" />
                <span>Important Deadlines</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-warning mt-1 flex-shrink-0" />
                  <span>Federal Deadline: June 30, 2024</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-warning mt-1 flex-shrink-0" />
                  <span>State Deadlines vary - Check early!</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-warning mt-1 flex-shrink-0" />
                  <span>School Deadlines - Priority dates</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/10 hover:border-secondary/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-secondary" />
                <span>Expert Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span>24/7 FAFSA Help Line</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Common mistakes to avoid</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Document checklist</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">How to Fill Out Your FAFSA Form</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  <span>Required Documents</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>Social Security Number</li>
                  <li>Tax returns and W-2s</li>
                  <li>Bank statements</li>
                  <li>Records of investments</li>
                  <li>Records of untaxed income</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <span>Financial Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>Parent financial information</li>
                  <li>Student income details</li>
                  <li>Asset information</li>
                  <li>Investment records</li>
                  <li>Business/farm ownership details</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span>School Selection</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>List up to 10 schools</li>
                  <li>School codes</li>
                  <li>Housing plans</li>
                  <li>Degree/certificate information</li>
                  <li>Study level (undergraduate/graduate)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};