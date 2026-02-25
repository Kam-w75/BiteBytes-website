import React from 'react';
import { SectionHeading } from './UI/SectionHeading';
import { Button } from './UI/Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "For culinary students and hobbyists.",
      features: [
        "Up to 10 recipes",
        "Up to 25 ingredients",
        "Basic cost calculations",
        "Community support",
        "Manual ingredient entry"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro Chef",
      price: "$9.99",
      period: "/month",
      description: "For professional chefs and sous chefs.",
      features: [
        "Unlimited recipes",
        "AI Ingredient Recognition",
        "Multi-vendor comparisons",
        "Advanced pricing analytics",
        "Export to PDF/CSV",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Business",
      price: "$29.99",
      period: "/month",
      description: "For restaurants and multi-unit ops.",
      features: [
        "All Pro features",
        "Unlimited AI scans",
        "Team collaboration (5 users)",
        "Menu engineering dashboard",
        "API Access",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Pricing"
          title="ROI in a Single Dinner Service"
          subtitle="Choose the plan that fits your kitchen. Start with our 7-day free trial on paid plans."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 bg-white border ${
                plan.popular 
                  ? 'border-brand-primary ring-4 ring-brand-primary/20 shadow-xl scale-105 z-10' 
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                {plan.period && <span className="text-slate-500 ml-1">{plan.period}</span>}
              </div>

              <Button 
                fullWidth 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="mb-8"
              >
                {plan.cta}
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 text-green-500 shrink-0">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};