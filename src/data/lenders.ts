
export type LenderType = 'private' | 'refinance';

export interface Lender {
  name: string;
  type: LenderType;
  featured: boolean;
  fixedAPR: string;
  variableAPR: string;
  minCreditScore: number;
  loanAmount: string;
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
    fixedAPR: "5.24% - 11.99%",
    variableAPR: "5.74% - 12.99%",
    minCreditScore: 650,
    loanAmount: "$5,000 - $100,000",
    pros: [
      "No origination or late fees",
      "Career coaching and job search assistance",
      "Unemployment protection benefits",
      "Member perks and exclusive events",
      "0.25% rate discount with autopay"
    ],
    cons: [
      "Higher credit score requirements than some competitors",
      "No cosigner release option available",
      "Must be employed or have sufficient income"
    ],
    specialFeatures: [
      "Member rewards program with referral bonuses",
      "Access to wealth management tools",
      "Career advisory services",
      "Comprehensive mobile app"
    ],
    link: "https://www.sofi.com/private-student-loans"
  },
  {
    name: "Earnest",
    type: "private",
    featured: true,
    fixedAPR: "5.49% - 13.03%",
    variableAPR: "5.89% - 13.24%",
    minCreditScore: 680,
    loanAmount: "$1,000 - $200,000",
    pros: [
      "Flexible payment options",
      "Skip one payment per year",
      "No fees whatsoever",
      "Precision pricing with 180 options",
      "9-month grace period"
    ],
    cons: [
      "Not available in all states",
      "Higher credit score requirement",
      "No cosigner option for refinancing"
    ],
    specialFeatures: [
      "Customizable loan terms",
      "Merit-based underwriting",
      "Flexible payment schedule",
      "Mobile-first experience"
    ],
    link: "https://www.earnest.com/student-loans"
  },
  {
    name: "College Ave",
    type: "private",
    featured: false,
    fixedAPR: "4.99% - 12.99%",
    variableAPR: "5.39% - 13.95%",
    minCreditScore: 660,
    loanAmount: "$1,000 - $150,000",
    pros: [
      "Multiple repayment options while in school",
      "Quick 3-minute application process",
      "Coverage up to 100% of school-certified costs",
      "Interest rate discounts available"
    ],
    cons: [
      "Higher rates for some borrowers",
      "Shorter maximum loan term",
      "Limited hardship options"
    ],
    specialFeatures: [
      "Parent loan options available",
      "Career success rewards",
      "Multi-year approval option",
      "International student loans"
    ],
    link: "https://www.collegeavestudentloans.com"
  },
  {
    name: "Discover",
    type: "private",
    featured: false,
    fixedAPR: "5.99% - 13.99%",
    variableAPR: "6.24% - 14.99%",
    minCreditScore: 650,
    loanAmount: "$1,000 - $150,000",
    pros: [
      "Cash rewards for good grades",
      "No fees of any kind",
      "Optional in-school payments",
      "40% discount for autopay"
    ],
    cons: [
      "No prequalification option",
      "Longer application process",
      "Less flexible repayment terms"
    ],
    specialFeatures: [
      "1% cash back for good grades",
      "24/7 U.S.-based customer service",
      "Free credit score monitoring",
      "Graduation reward"
    ],
    link: "https://www.discover.com/student-loans"
  },
  {
    name: "Laurel Road",
    type: "refinance",
    featured: true,
    fixedAPR: "5.24% - 11.99%",
    variableAPR: "5.49% - 12.99%",
    minCreditScore: 660,
    loanAmount: "$5,000 - No maximum",
    pros: [
      "Special rates for healthcare professionals",
      "No maximum loan amount",
      "Parent PLUS refinancing available",
      "Flexible repayment terms"
    ],
    cons: [
      "Limited forbearance options",
      "Must have completed degree",
      "Employment required for approval"
    ],
    specialFeatures: [
      "Healthcare professional discounts",
      "Direct parent PLUS refinancing",
      "Career support services",
      "Financial planning tools"
    ],
    link: "https://www.laurelroad.com/student-loans"
  },
  {
    name: "CommonBond",
    type: "refinance",
    featured: false,
    fixedAPR: "5.44% - 12.99%",
    variableAPR: "5.99% - 13.99%",
    minCreditScore: 660,
    loanAmount: "$5,000 - $500,000",
    pros: [
      "Hybrid loan options available",
      "Social impact program",
      "24/7 customer support",
      "Flexible repayment plans"
    ],
    cons: [
      "Not available in all states",
      "Longer application process",
      "Must be employed or have offer"
    ],
    specialFeatures: [
      "Hybrid rate options",
      "Social promise program",
      "Economic hardship forbearance",
      "Community events"
    ],
    link: "https://www.commonbond.co/refinance-student-loan"
  }
];
