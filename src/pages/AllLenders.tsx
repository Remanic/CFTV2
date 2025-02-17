
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LenderTypeSelector } from "@/components/LenderTypeSelector";
import { LendersList } from "@/components/LendersList";
import { LendersHeader } from "@/components/LendersHeader";
import { lenders, type LenderType } from "@/data/lenders";

const AllLenders = () => {
  const [selectedType, setSelectedType] = useState<LenderType>("private");

  const filteredLenders = lenders.filter(lender => lender.type === selectedType);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Best Student Loan Lenders 2024 | Compare Private Loans & Refinancing Rates</title>
        <meta name="description" content="Compare the best student loan lenders of 2024. Find competitive rates, flexible terms, and exclusive benefits for private student loans and refinancing options." />
        <meta name="keywords" content="student loans, private student loans, student loan refinancing, best student loan lenders, compare student loans, student loan rates 2024" />
        <link rel="canonical" href="https://cashflowtime.com/all-lenders" />
      </Helmet>

      <Header />
      <main className="flex-grow bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <LendersHeader />
          <LenderTypeSelector 
            selectedType={selectedType}
            onTypeChange={setSelectedType}
          />
          <LendersList lenders={filteredLenders} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllLenders;
