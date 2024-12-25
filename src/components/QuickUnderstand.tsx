import { Calculator, Home, Car, CreditCard, PiggyBank } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const QuickUnderstand = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
            Financial Planning Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Make informed financial decisions with our comprehensive suite of calculators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-6 w-6 text-primary" />
                <span>Mortgage Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Calculate your monthly mortgage payments, including principal, interest, taxes, and insurance
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-6 w-6 text-primary" />
                <span>Auto Loan Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Estimate your monthly car payments and total interest over the loan term
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-primary" />
                <span>Credit Card Payment Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Plan your credit card debt repayment and understand total interest costs
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                <span>EMI Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Calculate Equated Monthly Installments for any loan amount and term
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank className="h-6 w-6 text-primary" />
                <span>Savings Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Plan your savings goals and calculate compound interest earnings
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};