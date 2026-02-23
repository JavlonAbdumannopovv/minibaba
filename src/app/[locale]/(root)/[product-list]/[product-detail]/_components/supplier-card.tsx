import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  name: string;
  logo: string;
  verified?: boolean;
  locationText: string; // "Tashkent, UZ"
  experienceText: string; // "8 yillik tajriba"
  shopHref: string;
};

export function SupplierCard({
  name,
  logo,
  verified,
  locationText,
  experienceText,
  shopHref,
}: Props) {
  const t = useTranslations("ProductDetail.Supplier");

  return (
    <div className="bg-card border-border bg-surface flex flex-wrap items-center justify-between gap-4 rounded-xl p-4 shadow-sm max-sm:text-center">
      <div className="flex flex-wrap gap-4">
        <div className="bg-muted relative h-14 w-14 overflow-hidden rounded-full max-sm:mx-auto">
          <Image src={logo} alt={`${name} logo`} fill className="object-cover" sizes="56px" />
        </div>

        <div>
          <div className="flex items-center gap-2 max-sm:flex-wrap max-sm:justify-center max-sm:pb-2">
            <h5 className="font-bold">{name}</h5>
            {verified ? (
              <Badge className="bg-surface hover:bg-surface/80 text-primary">{t("verified")}</Badge>
            ) : null}
          </div>

          <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-2 text-xs max-sm:justify-center">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {locationText}
            </span>
            <span className="text-border">•</span>
            <span>
              {experienceText} {t("experience")}
            </span>
          </div>
        </div>
      </div>

      <Button
        asChild
        className="text-primary hover:bg-primary/30 bg-surface border-primary min-w-auto rounded-lg border max-sm:mx-auto"
      >
        <Link href={shopHref}>{t("viewShop")}</Link>
      </Button>
    </div>
  );
}
