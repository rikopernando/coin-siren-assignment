/**
 * Type definitions for Coin Siren Landing Page
 */

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

export interface LandingPageData {
  header: HeaderData;
  hero: HeroSection;
  features: FeatureItem[];
  services: ServiceCategory[];
}
