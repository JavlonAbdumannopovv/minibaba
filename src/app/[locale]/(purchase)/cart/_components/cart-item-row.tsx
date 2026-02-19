"use client";

import Image from "next/image";
import type { CartItem } from "@/types/cart.type";
import { useCartStore } from "@/store/cartStore";
import { QuantityStepper } from "@/components/shared/quantity-stepper";
import { useLocale, useTranslations } from "next-intl";
import { formatUZS } from "@/helper";

type Props = { item: CartItem };

export function CartItemRow({ item }: Props) {
  const t = useTranslations("Cart");

  const toggleItem = useCartStore((s) => s.toggleItem);
  const setQty = useCartStore((s) => s.setQty);

  const lineTotal = item.qty * item.unitPriceUZS;

  return (
    <div
      className={[
        // mobile: stack, md+: 3-column layout
        "grid gap-4 p-6",
        "grid-cols-1",
        "md:grid-cols-[auto,1fr,220px] md:items-start",
      ].join(" ")}
    >
      {/* Checkbox */}
      <div className="md:pt-1">
        <input
          type="checkbox"
          className="border-border text-primary focus:ring-primary h-5 w-5 cursor-pointer rounded"
          checked={item.selected}
          onChange={() => toggleItem(item.id)}
          aria-label={t("selectAria", { title: item.title })}
        />
      </div>

      <div className="xl:flex xl:justify-between">
        {/* Product info */}
        <div className="flex gap-4 max-sm:flex-col max-sm:items-center max-sm:text-center">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
            <Image
              alt={item.title}
              src={item.imageUrl}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-base leading-snug font-bold whitespace-normal sm:text-lg">
              {item.title}
            </h3>

            {item.variantLabel ? (
              <p className="text-text-muted mt-1 line-clamp-2 text-sm">{item.variantLabel}</p>
            ) : null}

            <div className="mt-3 text-sm">
              <span className="text-text-muted">{t("unitPriceLabel")}</span>
              <span className="ml-1 font-bold">
                {formatUZS(item.unitPriceUZS)}
                {item.unitLabel ? ` / ${item.unitLabel}` : ""}
              </span>
            </div>
          </div>
        </div>

        {/* Qty + total */}
        <div
          className={[
            "flex flex-wrap items-center justify-between gap-4 max-sm:mt-8 max-sm:justify-center",
            "md:flex-col md:items-end md:justify-start",
          ].join(" ")}
        >
          <QuantityStepper
            value={item.qty}
            min={item.minQty ?? 1}
            step={1}
            onChange={(next) => setQty(item.id, next)}
          />

          <div className="text-right">
            <p className="text-text-muted text-xs">{t("totalPriceLabel")}</p>
            <p className="text-primary text-lg font-extrabold">{formatUZS(lineTotal)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
