"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { formatUZS } from "@/helper";
import { CheckoutValues } from "@/types/checkout.type";

type SummaryItem = {
  id: string;
  title: string;
  variantLabel?: string; // "12 juft Qizil"
  qty: number;
  price: number; // 1 dona narxi (so'm)
  imageUrl: string;
};

type Props = {
  items?: SummaryItem[];
  vatRate?: number; // default 0.12
};

function CheckoutSummary({ items, vatRate = 0.12 }: Props) {
  const { watch, formState } = useFormContext<CheckoutValues>();

  const deliveryType = watch("delivery.type");

  // vaqtincha demo items (cart ulanmaguncha)
  const fallbackItems: SummaryItem[] = React.useMemo(
    () => [
      {
        id: "1",
        title: "Krossovka Air Max 270 (Optom)",
        variantLabel: "12 juft • Qizil",
        qty: 12,
        price: 200000, // 1 juft
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuApXqc0KJ7_ihFWqwbEGEbaH1nWI8-nXZnKHTkJDNCb_GMip-66otlSVqsMgws2pbCipploRIoz38On0zS_QZzofc0iWGnUKnHIbbhxbVzvlw9-kJdQXAtE7zPIxsLQ8fvxPmUF_u_ToxB17ggpumcFo3EmhlZ3nN-XPe2x1zvLf8v8LK6pOeFJ6mrnxSv4taEMbL7nw0UCcTslrS9sm42I-Imi6dE1A1i7fmrtUq-4q8ERYmpXHZuVOn0srsofGGRsXJYJRVh5s44",
      },
      {
        id: "2",
        title: "Smart Watch Series 8 Pro",
        variantLabel: "50 dona • Kumushrang",
        qty: 50,
        price: 300000, // 1 dona
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAgGWT9CnKvv938mPssI9R4iFAIThDyt_Iirk_cT_x6bGA6djl7D9mx5E_d19eAsYN1ta6Ijdl37td1UqlDymB5mpFdL5sBFhv3BzZPPf_Wbnf55eGY8OhifH2xzGzOosIhSQ8lW0VSJaf7WfSfpayHcHB5uKau2N07kxiB7sfC5aitAZezb9a7sDsrMIjK0nKZiUs2UigbvIbxn3-R2EWPZycvKF6PuHqq88fCm26MdkA9MGlvN_Y6h-Nq2sPSRDOv98SIZXi055w",
      },
    ],
    [],
  );

  const list = items?.length ? items : fallbackItems;

  const qtyTotal = React.useMemo(() => list.reduce((acc, it) => acc + it.qty, 0), [list]);

  const subtotal = React.useMemo(
    () => list.reduce((acc, it) => acc + it.qty * it.price, 0),
    [list],
  );

  const deliveryFee = React.useMemo(() => {
    return deliveryType === "courier" ? 30000 : 0;
  }, [deliveryType]);

  const vat = React.useMemo(() => subtotal * vatRate, [subtotal, vatRate]);

  const total = React.useMemo(() => subtotal + deliveryFee + vat, [subtotal, deliveryFee, vat]);

  // form invalid bo'lsa submit disable qilish uchun
  const canSubmit = formState.isValid;

  return (
    <div className="space-y-4">
      <Card className="border-border bg-surface rounded-xl border shadow-md">
        <CardContent className="p-6">
          <h2 className="mb-6 text-xl font-bold">Sizning buyurtmangiz</h2>

          {/* items preview */}
          <div className="border-border mb-6 space-y-4 border-b pb-6">
            {list.map((it) => (
              <div key={it.id} className="flex gap-4">
                <div
                  className="bg-background-light h-16 w-16 flex-shrink-0 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url('${it.imageUrl}')` }}
                  aria-hidden
                />
                <div className="flex-1">
                  <p className="line-clamp-1 text-sm font-semibold">{it.title}</p>
                  {it.variantLabel ? (
                    <p className="text-text-muted text-xs">{it.variantLabel}</p>
                  ) : null}
                  <p className="mt-1 text-sm font-bold">{formatUZS(it.qty * it.price)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* price breakdown */}
          <div className="mb-8 space-y-3">
            <div className="text-text-muted flex justify-between">
              <span>Mahsulotlar ({qtyTotal} dona)</span>
              <span>{formatUZS(subtotal)}</span>
            </div>

            <div className="text-text-muted flex justify-between">
              <span>Yetkazib berish</span>
              <span className={deliveryFee ? "text-primary font-medium" : ""}>
                {deliveryFee ? `+${formatUZS(deliveryFee)}` : formatUZS(0)}
              </span>
            </div>

            <div className="text-text-muted flex justify-between">
              <span>QQS ({Math.round(vatRate * 100)}%)</span>
              <span>{formatUZS(vat)}</span>
            </div>

            <div className="border-border flex items-end justify-between border-t pt-4">
              <span className="text-lg font-bold">Jami:</span>
              <div className="text-right">
                <span className="text-primary block text-2xl leading-none font-black">
                  {formatUZS(total)}
                </span>
              </div>
            </div>
          </div>

          {/* submit */}
          <button
            type="submit"
            className="bg-primary hover:bg-button-hover text-text-inverse shadow-primary/25 flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-xl font-bold shadow-lg transition-all disabled:opacity-60"
            disabled={!canSubmit}
          >
            <ShieldCheck className="h-5 w-5" />
            To‘lovni tasdiqlash
          </button>

          <p className="text-text-muted mt-4 text-center text-[10px]">
            "To‘lovni tasdiqlash" tugmasini bosish orqali siz{" "}
            <a className="underline" href="#">
              foydalanish shartlariga
            </a>{" "}
            rozilik bildirasiz.
          </p>
        </CardContent>
      </Card>

      {/* trust badge */}
      <div className="bg-primary/10 flex items-center gap-4 rounded-xl p-4">
        <div className="bg-primary text-text-inverse rounded-lg p-2">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-bold">Minibaba Himoyasi</p>
          <p className="text-[10px]">
            To&apos;lovingiz mahsulot yetib borguncha bizning hisobimizda xavfsiz saqlanadi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
