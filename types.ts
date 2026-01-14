import { LucideIcon } from 'lucide-react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
  cta: string;
}

export interface NavItem {
  label: string;
  href: string;
}