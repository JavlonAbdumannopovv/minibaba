"use client";

import * as React from "react";
import type { CartItem, CartSupplier } from "@/types/cart.type";
import { useCartStore } from "@/store/cartStore";

import { Store } from "lucide-react";
import { cn } from "@/lib/utils";
import { CartItemRow } from "./cart-item-row";
import { useTranslations } from "next-intl";

type Props = {
  supplier: CartSupplier;
  items: CartItem[];
};

export function CartSupplierGroup({ supplier, items }: Props) {
  const t = useTranslations("Cart");
  const toggleSupplier = useCartStore((s) => s.toggleSupplier);

  const allSelected = items.length > 0 && items.every((it) => it.selected);
  const noneSelected = items.every((it) => !it.selected);
  const indeterminate = !allSelected && !noneSelected;

  const supplierCheckRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (!supplierCheckRef.current) return;
    supplierCheckRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <section className="border-border bg-surface mb-10 overflow-hidden rounded-xl border">
      {/* Header */}
      <div className="border-border bg-bg flex items-center justify-between gap-4 border-b px-6 py-4 max-md:flex-col max-md:items-start">
        <div className="flex items-center gap-3">
          <input
            ref={supplierCheckRef}
            type="checkbox"
            className="border-border text-primary focus:ring-primary h-5 w-5 cursor-pointer rounded"
            checked={allSelected}
            onChange={() => toggleSupplier(supplier.id)}
            aria-label={`${supplier.name} supplier select`}
          />

          <Store className="text-primary h-5 w-5" />
          <h2 className="text-lg font-bold">{supplier.name}</h2>
        </div>

        <div>
          {supplier.isTrusted ? (
            <span className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-semibold">
              {t("trustedSupplierBadge")}
            </span>
          ) : null}
        </div>
      </div>

      {/* Items */}
      <div className={cn("divide-border divide-y")}>
        {items.map((it) => (
          <CartItemRow key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}
