import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  isNew?: boolean;
  productId?: string;
  title: string;
  rating: number; // 0..5
  reviewsCount: number;
  soldCountText: string; // "500+ sotilgan"
};

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const total = 5;

  return (
    <div className="text-primary flex items-center">
      {Array.from({ length: total }).map((_, i) => {
        const filled = i < full || (i === full && half);
        return (
          <Star
            key={i}
            className={filled ? "fill-primary h-4 w-4" : "text-muted-foreground h-4 w-4"}
          />
        );
      })}
    </div>
  );
}

function ProductInfo({ isNew, productId, title, rating, reviewsCount, soldCountText }: Props) {
  const t = useTranslations("ProductDetail.Info");

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        {isNew ? (
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10" variant="secondary">
            {t("new")}
          </Badge>
        ) : null}
        {productId ? <span className="text-muted-foreground text-xs">ID: {productId}</span> : null}
      </div>

      <h2 className="text-foreground text-3xl leading-tight font-extrabold">{title}</h2>

      <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-sm">
        <div className="flex items-center gap-2">
          <Stars rating={rating} />
          <span className="text-foreground font-bold">{rating.toFixed(1)}</span>
        </div>

        <span className="bg-border h-1 w-1 rounded-full" />

        <span>{t("reviews", { count: reviewsCount })}</span>

        <span className="bg-border h-1 w-1 rounded-full" />

        <span> {t("sold", { count: soldCountText })} </span>
      </div>
    </div>
  );
}

export default ProductInfo;
