
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
    link: "https://www.credible.com/earnest-student-loans"
  },
  {
    name: "College Ave",
    type: "private",
    featured: false,
    fixedAPR: "4.49% - 8.99%",
    variableAPR: "4.74% - 9.74%",
    minCreditScore: 660,
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
    link: "https://www.credible.com/college-ave-student-loans"
  },
  {
    name: "Discover",
    type: "private",
    featured: false,
    fixedAPR: "4.99% - 9.99%",
    variableAPR: "5.24% - 10.99%",
    minCreditScore: 650,
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
    link: "https://www.credible.com/discover-student-loans"
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
    link: "https://www.credible.com/laurel-road-student-loans"
  },
  {
    name: "CommonBond",
    type: "refinance",
    featured: false,
    fixedAPR: "4.44% - 8.99%",
    variableAPR: "4.99% - 9.99%",
    minCreditScore: 660,
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
    link: "https://www.credible.com/commonbond-student-loans"
  }
];
