import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  icon: LucideIcon;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  price: string;
  unit: string;
  features: string[];
  recommended?: boolean;
}