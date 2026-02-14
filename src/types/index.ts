import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}

export type SubCategory = { id: number; name: string; slug: string };

export type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  subCategories: SubCategory[];
};

export type HeroSlide = {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  minOrder?: number;
  discountPercent?: number;
  image: string;
  verified?: boolean;
};

export type Seller = {
  id: string;
  name: string;
  experienceYears: number;
  city: string;
  reliabilityPercent: number; // 0-100
  responseSeconds: number;
  image: string;
  href: string;
};

export type FooterLink = { label: string; href: string };

export type Filters = {
  priceMin: number;
  priceMax: number;
  moqMin: number;
  ratingMin: number; // 0..5
  regions: string[];
};

export type ProductList = {
  id: string;
  title: string;
  preview: string;
  price: number;
  moq: number;
  rating: number;
  region: string;
};
