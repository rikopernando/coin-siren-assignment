/**
 * Type definitions for Coin Siren Landing Page
 */

// Re-export common utility types
export type * from './types/common';

export interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
}

export interface ProfileCard {
  name: string;
  imageUrl: string;
  countryFlagUrl: string;
  skills: string[];
  price: string;
  experience: string;
}

export interface FeatureItem {
  title: string;
  subtitle: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  iconName: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
  ctaText: string;
  profileCard: ProfileCard; // Keep for backward compatibility
  profileCards?: ProfileCard[]; // New: support multiple profiles for carousel
}

export interface HeaderData {
  navigationItems: NavigationItem[];
  ctaButtonText: string;
}

export interface FooterCard {
  id: string;
  iconName: string;
  title: string;
  link: string;
}

export interface FooterData {
  logo: string;
  description: string;
  phone: string;
  email: string;
  cards: FooterCard[];
  companyInfo: {
    name: string;
    ceo: string;
    registrationNumber: string;
    address: string;
  };
  indiaInfo: {
    name: string;
    ceo: string;
    registrationNumber: string;
    address: string;
  };
  copyright: string;
}

export interface LandingPageData {
  header: HeaderData;
  hero: HeroSection;
  features: FeatureItem[];
  services: ServiceCategory[];
  footer: FooterData;
}
