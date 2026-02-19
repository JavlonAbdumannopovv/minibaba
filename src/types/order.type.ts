import type { CheckoutValues } from "@/types/checkout.type";

export type OrderLine = {
  itemId: string;
  supplierId: string;
  title: string;
  variantLabel?: string;
  imageUrl: string;

  qty: number;
  unitPriceUZS: number;
  unitLabel?: string;

  lineTotalUZS: number;
};

export type OrderPricing = {
  itemsSubtotalUZS: number;
  deliveryFeeUZS: number;
  vatUZS: number;
  grandTotalUZS: number;
};

export type OrderDraft = {
  id: string; // vaqtincha client id (backend keyin beradi)
  createdAt: string; // ISO string
  status: "draft" | "submitted";

  checkout: CheckoutValues; // shipping+delivery+payment
  lines: OrderLine[];

  pricing: OrderPricing;
};
