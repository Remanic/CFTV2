export type LenderType = 'private' | 'refinance';

export interface Lender {
  name: string;
  type: LenderType;
  featured: boolean;
  fixedAPR: string;
  variableAPR: string;
  minCreditScore: number;
  pros: string[];
  cons: string[];
  specialFeatures: string[];
  link: string;
}

export const lenders: Lender[] = [
  {
    name: "SoFi",
    type: "private",
    featured: true,
    fixedAPR: "4.49% - 8.99%",
    variableAPR: "4.99% - 9.99%",
    minCreditScore: 650,
    pros: [
      "No origination fees",
      "Career coaching included",
      "Unemployment protection",
      "Parent PLUS refinancing available"
    ],
    cons: [
      "Requires good credit score",
      "No cosigner release option"
    ],
    specialFeatures: [
      "0.25% autopay discount",
      "Member benefits program",
      "Flexible repayment terms"
    ],
    link: "https://www.credible.com/sofi-student-loans"
  },
  {
    name: "Earnest",
    type: "private",
    featured: true,
    fixedAPR: "4.25% - 9.99%",
    variableAPR: "4.74% - 10.99%",
    minCreditScore: 680,
    pros: [
      "Skip one payment per year",
      "Flexible payment options",
      "Merit-based underwriting",
      "Customizable loan terms"
    ],
    cons: [
      "Not available in all states",
      "Higher credit score requirement"
    ],
    specialFeatures: [
      "Precision pricing",
      "No fees whatsoever",
      "9-month grace period"
    ],
    link: "https://www.credible.com/earnest-student-loans"
  },
  {
    name: "CommonBond",
    type: "private",
    featured: false,
    fixedAPR: "4.44% - 8.99%",
    variableAPR: "4.99% - 9.99%",
    minCreditScore: 660,
    pros: [
      "Social impact program",
      "Hybrid loan options",
      "24/7 customer support",
      "Flexible repayment plans"
    ],
    cons: [
      "Limited state availability",
      "Longer application process"
    ],
    specialFeatures: [
      "Hybrid rate options",
      "Social promise program",
      "Economic hardship forbearance"
    ],
    link: "https://www.credible.com/commonbond-student-loans"
  },
  {
    name: "Laurel Road",
    type: "refinance",
    featured: true,
    fixedAPR: "4.24% - 8.99%",
    variableAPR: "4.49% - 9.99%",
    minCreditScore: 660,
    pros: [
      "Special rates for healthcare professionals",
      "No maximum loan amount",
      "Parent PLUS refinancing",
      "Flexible terms"
    ],
    cons: [
      "Limited forbearance options",
      "Must have graduated to qualify"
    ],
    specialFeatures: [
      "Healthcare professional discounts",
      "Direct parent PLUS loan refinancing",
      "Career support services"
    ],
    link: "https://www.credible.com/laurel-road-student-loans"
  },
  {
    name: "Splash Financial",
    type: "refinance",
    featured: false,
    fixedAPR: "4.47% - 8.99%",
    variableAPR: "4.49% - 9.99%",
    minCreditScore: 650,
    pros: [
      "Competitive rates",
      "No application fees",
      "Quick online application",
      "Multiple repayment terms"
    ],
    cons: [
      "Not a direct lender",
      "Must have completed degree"
    ],
    specialFeatures: [
      "Partnership with multiple lenders",
      "Medical resident refinancing",
      "Additional rate discounts available"
    ],
    link: "https://www.credible.com/splash-financial-student-loans"
  }
];
