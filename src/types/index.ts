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
