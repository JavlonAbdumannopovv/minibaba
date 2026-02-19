"use client";

import * as React from "react";
import { useCartStore } from "@/store/cartStore";
import { CartSupplierGroup } from "./_components/cart-supplier-group";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { formatUZS } from "@/helper";

export default function CartPage() {
  const t = useTranslations("Cart");

  const suppliers = useCartStore((s) => s.suppliers);
  const items = useCartStore((s) => s.items);

  const grouped = React.useMemo(() => {
    return suppliers
      .map((sup) => ({
        supplier: sup,
        items: items.filter((it) => it.supplierId === sup.id),
      }))
      .filter((g) => g.items.length > 0);
  }, [suppliers, items]);

  const selectedItems = React.useMemo(() => items.filter((it) => it.selected), [items]);

  const subtotal = React.useMemo(
    () => selectedItems.reduce((sum, it) => sum + it.qty * it.unitPriceUZS, 0),
    [selectedItems],
  );

  const totalQty = React.useMemo(
    () => selectedItems.reduce((sum, it) => sum + it.qty, 0),
    [selectedItems],
  );

  const uniqueCount = selectedItems.length;

  const preview = selectedItems.slice(0, 6);
  const extra = Math.max(0, selectedItems.length - preview.length);

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="flex-1 space-y-8">
        <div>
          <h1 className="mb-2 text-3xl font-black tracking-tight">
            {t("title")} ({t("productCount", { count: items.length })})
          </h1>
          <p className="text-text-muted">{t("description")}</p>
        </div>
        <pre className="text-xs">
          {grouped.map((g) => (
            <CartSupplierGroup key={g.supplier.id} supplier={g.supplier} items={g.items} />
          ))}
        </pre>
      </div>

      <aside className="lg:w-96">
        <div className="sticky top-24 space-y-4">
          {/* CartSummary */}
          <div className="border-border bg-surface rounded-xl border p-6">
            <h3 className="mb-6 text-xl font-bold">{t("summaryTitle")}</h3>
            {/* Selected items preview */}
            {selectedItems.length ? (
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap -space-x-3">
                  {preview.map((it) => (
                    <div
                      key={it.id}
                      className="border-border bg-bg relative my-2 h-20 w-20 overflow-hidden rounded-lg border"
                      title={it.title}
                    >
                      <Image
                        src={it.imageUrl}
                        alt={it.title}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                  ))}

                  {extra ? (
                    <div className="border-border bg-bg text-text-muted flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-bold">
                      +{extra}
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
            <div className="mt-4 space-y-3 text-sm">
              <div className="text-text-muted flex justify-between">
                <span>{t("itemsLine", { count: uniqueCount })}</span>
                <span>
                  {totalQty} {t("qtyUnit")}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-text-muted">{t("totalLabel")}</span>
                <span className="font-bold">{formatUZS(subtotal)}</span>
              </div>
            </div>

            <Link href={"/checkout"}>
              <button
                className="bg-primary text-text-inverse hover:bg-button-hover disabled:hover:bg-primary mt-6 w-full cursor-pointer rounded-xl py-4 text-lg font-black disabled:cursor-not-allowed disabled:opacity-50"
                disabled={selectedItems.length === 0}
              >
                {t("checkoutButton")}
              </button>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
