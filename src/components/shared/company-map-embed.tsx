import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

type Props = {
  query: string; // "Toshkent, Yunusobod tumani" yoki "41.3111,69.2797"
};

export function CompanyMapEmbed({ query }: Props) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  const t = useTranslations("SupplierDetail");

  return (
    <Card className="overflow-hidden border-none">
      <CardHeader className="pb-3">
        <CardTitle>{t("location")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
          <iframe
            title="Company location"
            src={src}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </CardContent>
    </Card>
  );
}
