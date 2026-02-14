// Umumiy yordamchi tiplar
type URLString = string;

// Pricing
export interface PricingTier {
  label: string;
  price: string;
  highlight?: boolean;
  highlightLabel?: string;
}

export interface Pricing {
  moq: number;
  moqText: string;
  tiers: PricingTier[];
}

// Variants
export interface Variants {
  title: string;
  options: string[];
  default: string;
}

// Supplier
export interface Supplier {
  name: string;
  logo: URLString;
  verified: boolean;
  locationText: string;
  experienceText: string;
  shopHref: string;
}

// Description
export interface SpecItem {
  label: string;
  value: string;
}

//Reviews
export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
};

// Description

export interface Description {
  title: string;
  text: string;
  specs: SpecItem[];
}

// Logistics
export interface LogisticsBlock {
  title: string;
  text: string;
}

export interface Logistics {
  blocks: LogisticsBlock[];
  qualityNote: string;
}

// Purchase bar
export interface PurchaseBar {
  totalLabel: string;
  totalPrice: string;
  moq: number;
}

// Product (asosiy obyekt)
export interface Product {
  id: string;
  isNew: boolean;
  title: string;

  images: URLString[];

  rating: number;
  reviewsCount: number;
  soldCountText: string;

  pricing: Pricing;
  variants: Variants;
  supplier: Supplier;
  description: Description;
  logistics: Logistics;
  purchaseBar: PurchaseBar;
}
