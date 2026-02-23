import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Pricing } from "@/types/product.type";
import { useTranslations } from "next-intl";

type Props = {
  pricing: Pricing;
};

export function PriceTiers({ pricing }: Props) {
  const { moqText, tiers } = pricing;
  const t = useTranslations("ProductDetail.Price");

  return (
    <div className="bg-surface border-border rounded-xl p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold">{t("title")}</h3>
        <div className="text-text-muted text-sm font-medium">{moqText}</div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={cn(
              "bg-bg hover:bg-bg/80 relative cursor-pointer rounded-lg border p-4 text-center",
              tier.highlight ? "border-primary bg-primary/5" : "border-border bg-muted/30",
            )}
          >
            {tier.highlight ? (
              <Badge className="bg-primary hover:bg-primary text-text-inverse absolute -top-3 left-1/2 -translate-x-1/2">
                {tier.highlightLabel ?? t("popular")}
              </Badge>
            ) : null}

            <div className="text-text-muted text-sm">{tier.label}</div>
            <div
              className={cn(
                "mt-1 text-xl font-extrabold",
                tier.highlight ? "text-primary" : "text-foreground",
              )}
            >
              {tier.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
