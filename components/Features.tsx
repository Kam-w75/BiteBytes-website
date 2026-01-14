import React from 'react';
import { SectionHeading } from './UI/SectionHeading';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  ChefHat, 
  Package, 
  ScanFace, 
  Smartphone, 
  LucideIcon, 
  CheckCircle2 
} from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, items, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-primary/50 transition-all duration-300 flex flex-col h-full"
  >
    <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 shrink-0">
      <Icon size={28} strokeWidth={2} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
    
    <ul className="space-y-3 mt-auto">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
          <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
          <span className="leading-tight">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export const Features: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: "Profit Intelligence Engine",
      description: "Bridge the gap between recipe tracking and business intelligence.",
      items: [
        "Total Prime Costing (Food + Labor)",
        "Labor Roles & Efficiency Rates",
        "Batch vs. Service Labor Logic",
        "Menu Engineering Matrix",
        "'What If' Scenario Builder"
      ]
    },
    {
      icon: ChefHat,
      title: "Core Recipe & Kitchen Logic",
      description: "The foundational logic for precise kitchen management.",
      items: [
        "Ingredient Yield % & Shrinkage",
        "Sub-Recipe Support",
        "Unit Conversion Engine",
        "Allergen Auto-Detection",
        "Nutrition Info Aggregation"
      ]
    },
    {
      icon: Package,
      title: "Inventory & Vendor Management",
      description: "Streamline what comes in the back door.",
      items: [
        "Multi-Vendor Price Comparison",
        "Low Stock & Expiry Alerts",
        "Offline-First Inventory Mode",
        "Digital Purchase Orders"
      ]
    },
    {
      icon: ScanFace,
      title: "AI & Camera Features",
      description: "Reduce manual data entry with advanced vision AI.",
      items: [
        "Invoice Scanning (OCR)",
        "AI Ingredient Recognition",
        "Voice Assistant Mode"
      ]
    },
    {
      icon: Smartphone,
      title: "iOS Native Integrations",
      description: "Deep system integration unique to the Apple ecosystem.",
      items: [
        "Lock Screen Live Activities",
        "Home Screen Widgets",
        "Spotlight Search Integration",
        "Siri Shortcuts"
      ]
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Powerful Features"
          title="The Complete Kitchen OS"
          subtitle="From recipe costing to menu engineering, BiteBytes provides every tool you need to run a profitable kitchen."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              items={feature.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};