import { create } from "zustand";
import type { CartItem, CartSupplier } from "@/types/cart.type";
import { cartItemsSeed, cartSuppliers } from "@/constants";

function clampQty(next: number, minQty = 1) {
  const n = Number.isFinite(next) ? Math.floor(next) : minQty;
  return Math.max(minQty, n);
}

type CartState = {
  suppliers: CartSupplier[];
  items: CartItem[];

  toggleItem: (id: string) => void;
  toggleSupplier: (supplierId: string) => void;

  setQty: (id: string, qty: number) => void;
  incQty: (id: string) => void;
  decQty: (id: string) => void;

  removeItem: (id: string) => void;
  clear: () => void;

  getSelectedItems: () => CartItem[];
  removeSelectedItems: () => void;
  clearSelection: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  suppliers: cartSuppliers,
  items: cartItemsSeed,

  toggleItem: (id) =>
    set((s) => ({
      items: s.items.map((it) => (it.id === id ? { ...it, selected: !it.selected } : it)),
    })),

  toggleSupplier: (supplierId) =>
    set((s) => {
      const group = s.items.filter((it) => it.supplierId === supplierId);
      const allSelected = group.length > 0 && group.every((it) => it.selected);
      const nextSelected = !allSelected;

      return {
        items: s.items.map((it) =>
          it.supplierId === supplierId ? { ...it, selected: nextSelected } : it,
        ),
      };
    }),

  // ✅ custom yozganda: faqat MOQdan pastga tushmasin, snap bo‘lmasin
  setQty: (id, qty) =>
    set((s) => ({
      items: s.items.map((it) => {
        if (it.id !== id) return it;

        const minQty = it.minQty ?? 1; // minQty minimal
        const next = clampQty(qty, minQty); // snap yo‘q
        return { ...it, qty: next };
      }),
    })),

  // ✅ + bosganda 1 tadan oshsin (minQty bu yerda faqat minimal)
  incQty: (id) =>
    set((s) => ({
      items: s.items.map((it) => {
        if (it.id !== id) return it;

        const minQty = it.minQty ?? 1;
        const next = clampQty((it.qty ?? minQty) + 1, minQty);
        return { ...it, qty: next };
      }),
    })),

  // ✅ - bosganda 1 tadan kamayib, minQtydan pastga tushmasin
  decQty: (id) =>
    set((s) => ({
      items: s.items.map((it) => {
        if (it.id !== id) return it;

        const minQty = it.minQty ?? 1;
        const next = clampQty((it.qty ?? minQty) - 1, minQty);
        return { ...it, qty: next };
      }),
    })),

  removeItem: (id) => set((s) => ({ items: s.items.filter((it) => it.id !== id) })),

  clear: () => set({ items: [], suppliers: get().suppliers }),

  getSelectedItems: () => get().items.filter((it) => it.selected),

  removeSelectedItems: () =>
    set((s) => ({
      items: s.items.filter((it) => !it.selected),
    })),

  clearSelection: () =>
    set((s) => ({
      items: s.items.map((it) => ({ ...it, selected: false })),
    })),
}));
