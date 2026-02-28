export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type PricingPlan = {
  title: string;
  shortDescription: string;
  price: string;
  priceNote: string;
  comingSoon: boolean;
  features: string[];
  whoItsFor: string;
  processSteps: ProcessStep[];
  faqs: FaqItem[];
};
