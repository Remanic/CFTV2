import { useState } from "react";
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