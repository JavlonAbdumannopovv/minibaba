"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Plus, Minus, ShoppingCart, FileText } from "lucide-react";

type Props = {
  totalLabel?: string; // optional override (agar kerak bo'lsa)
  totalPrice: string;
  moq: number;
  onChat?: () => void;
  onRfq?: () => void;
  onAddToCart?: (qty: number) => void;
};

export function StickyPurchaseBar({
  totalLabel,
  totalPrice,
  moq,
  onChat,
  onRfq,
  onAddToCart,
}: Props) {
  const t = useTranslations("ProductDetail.StickyBar");

  const [qty, setQty] = React.useState(moq);
  React.useEffect(() => setQty(moq), [moq]);

  const dec = () => setQty((q) => Math.max(moq, q - 1));
  const inc = () => setQty((q) => q + 1);

  const label = totalLabel ?? t("totalLabel");

  return (
    <div className="bg-surface border-border w-full border-t">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <div className="text-text-muted text-xs">{label}</div>
            <div className="text-text text-xl font-extrabold">{totalPrice}</div>
          </div>

          <div className="flex flex-wrap items-center gap-1 rounded-lg border p-1">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={dec}>
              <Minus className="h-4 w-4" />
            </Button>

            <Input
              type="number"
              min={moq}
              value={qty}
              onChange={(e) => setQty(Math.max(moq, Number(e.target.value || moq)))}
              className="h-8 w-14 border-0 bg-transparent p-0 text-center text-sm font-bold focus-visible:ring-0"
            />

            <Button variant="ghost" size="icon" className="text-primary h-8 w-8" onClick={inc}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" className="rounded-lg" onClick={onChat}>
            <MessageCircle className="text-primary mr-2 h-4 w-4" />
            {t("chat")}
          </Button>

          <Button variant="outline" className="rounded-lg" onClick={onRfq}>
            <FileText className="text-muted-foreground mr-2 h-4 w-4" />
            {t("rfq")}
          </Button>

          <Button
            className="bg-primary hover:bg-primary/90 text-surface h-14 rounded-lg px-8 font-bold"
            onClick={() => onAddToCart?.(qty)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {t("addToCart")}
          </Button>
        </div>
      </div>
    </div>
  );
}
