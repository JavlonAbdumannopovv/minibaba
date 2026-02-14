// components/logistics-card.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LogisticsCard() {
  const t = useTranslations("ProductDetail.Tabs");

  return (
    <Card className="border-border bg-surface w-full max-w-md rounded-2xl border shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-text mb-5 text-base font-semibold">{t("logistics")}</h3>

        <div className="space-y-5">
          {/* 1 */}
          <div className="flex gap-3">
            <div className="bg-primary/10 mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg">
              <Truck className="text-primary h-5 w-5" />
            </div>

            <div>
              <p className="text-text text-sm font-semibold">{t("fastDelivery")}</p>
              <p className="text-muted-foreground mt-1 text-xs leading-5">
                Toshkent bo'ylab 24 soat ichida. Viloyatlarga 3 ish kunigacha.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex gap-3">
            <div className="bg-primary/10 mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg">
              <Package className="text-primary h-5 w-5" />
            </div>

            <div>
              <p className="text-text text-sm font-semibold">{t("specialPackaging")}</p>
              <p className="text-muted-foreground mt-1 text-xs leading-5">
                Eksport sifatidagi yog'och qutilar bilan himoyalangan.
              </p>
            </div>
          </div>

          {/* Highlight box */}
          <div className="border-primary/35 bg-primary/8 rounded-xl border p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-white/70">
                <BadgeCheck className="text-primary h-5 w-5" />
              </div>

              <div>
                <p className="text-primary text-sm font-semibold">{t("quality")}</p>
                <p className="text-muted-foreground mt-1 text-xs leading-5">
                  Har bir uskuna jo'natilishdan oldin 12 soatlik test sinovidan o'tkaziladi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
