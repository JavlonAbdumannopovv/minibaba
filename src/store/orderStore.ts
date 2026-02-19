// src/store/orderStore.ts
"use client";

import { create } from "zustand";
import type { CheckoutValues } from "@/types/checkout.type";
import { useCartStore } from "@/store/cartStore";
import { OrderDraft, OrderLine } from "@/types/order.type";
import { calcOrderPricing } from "@/lib/older-pricing";

type OrderState = {
  draft: OrderDraft | null;

  buildDraft: (checkout: CheckoutValues) => OrderDraft; // cart’dan olib yasaydi
  clearDraft: () => void;
};

function makeId() {
  // Math.random hydrationga ta’sir qilmaydi, chunki bu faqat submit’da clientda ishlaydi
  return `ord_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export const useOrderStore = create<OrderState>((set) => ({
  draft: null,

  buildDraft: (checkout) => {
    const cart = useCartStore.getState();

    // faqat selectedlar
    const selected = cart.items.filter((it) => it.selected);

    if (!selected.length) {
      // real loyihada toast/alert
      throw new Error("Hech qanday mahsulot tanlanmagan");
    }

    // qty mapping: cart.items’da qty bor deb qabul qilamiz
    const lines: OrderLine[] = selected.map((it) => {
      const qty = (it as any).qty ?? 1;
      const lineTotalUZS = qty * it.unitPriceUZS;

      return {
        itemId: it.id,
        supplierId: it.supplierId,
        title: it.title,
        variantLabel: it.variantLabel,
        imageUrl: it.imageUrl,

        qty,
        unitPriceUZS: it.unitPriceUZS,
        unitLabel: it.unitLabel,

        lineTotalUZS,
      };
    });

    const pricing = calcOrderPricing(lines, checkout.delivery.type);

    const draft: OrderDraft = {
      id: makeId(),
      createdAt: new Date().toISOString(),
      status: "draft",
      checkout,
      lines,
      pricing,
    };

    set({ draft });

    return draft;
  },

  clearDraft: () => set({ draft: null }),
}));
