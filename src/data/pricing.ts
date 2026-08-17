import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
  {
    name: "Basic",
    price: 29,
    period: "month",
    features: [
      "50 AI thumbnail/mo ",
      "Basic templates",
      "Standard Resolution",
      "No Watermark",
      "Email support",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    price: 79,
    period: "month",
    features: [
      "Unlimited AI thumbnail generation",
      "Premium templates",
      "4K Resolution",
      "A/B Testing Tools",
      "priority support",
      "custom Fonts",
      "Brand Kit AnAlysis",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    period: "month",
    features: [
      "Everything in Pro",
      "API Access",
      "Team Collaboration",
      "Custom Branding",
      "Dedicated Account Manager",
    ],
    mostPopular: false,
  },
];
