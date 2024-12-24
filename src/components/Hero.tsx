import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const debtData = [
  { year: '2010', debt: 800 },
  { year: '2012', debt: 1000 },
  { year: '2014', debt: 1200 },
  { year: '2016', debt: 1400 },
  { year: '2018', debt: 1600 },
  { year: '2020', debt: 1700 },
  { year: '2022', debt: 1750 },
];

const config = {
  debt: {
    label: "Average Student Debt ($B)",
    theme: {
      light: "#2563eb",
      dark: "#60a5fa",
    },
  },
};

export const Hero = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Navigate Your Student Loan Journey With Confidence
            </h1>
            <p className="text-lg lg:text-xl text-gray-600">
              Join over 50,000 students who've mastered their loan management and started their journey to becoming debt-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Free Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Calculate Your Loans
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Free Forever</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Expert Guidance</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full">
            <ChartContainer config={config} className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 rounded-lg shadow-xl">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={debtData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="debtGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="year" 
                    className="text-muted-foreground text-xs"
                  />
                  <YAxis 
                    className="text-muted-foreground text-xs"
                    tickFormatter={(value) => `$${value}B`}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="debt" 
                    stroke="#2563eb" 
                    fillOpacity={1} 
                    fill="url(#debtGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="absolute bottom-4 left-4 text-sm font-medium text-muted-foreground">
                U.S. Student Loan Debt Growth (in Billions)
              </div>
            </ChartContainer>
          </div>
        </div>
      </div>
    </section>
  );
};