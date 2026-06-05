export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  colSpan: string;
}

export interface FunnelOption {
  id: string;
  label: string;
  subtitle: string;
  icon?: string;
  baseMultiplier: number;
}

export interface SizeOption {
  id: string;
  label: string;
  subtitle: string;
  multiplier: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
}

export interface TestimonialItem {
  id: string;
  text: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
