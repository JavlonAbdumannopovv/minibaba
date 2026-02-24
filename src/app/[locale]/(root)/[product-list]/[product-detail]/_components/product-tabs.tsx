"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LogisticsCard from "./logistics-card";
import ProductReviews from "./product-reviews";
import { useTranslations } from "next-intl";

type Spec = { label: string; value: string };

type Props = {
  descriptionTitle: string;
  description: string;
  specs: Spec[];
  deliveryBlock?: React.ReactNode;
  reviewsBlock?: React.ReactNode;
  reviewsCount: number;
};

export function ProductTabs({
  descriptionTitle,
  description,
  specs,
  deliveryBlock,
  reviewsBlock,
  reviewsCount,
}: Props) {
  const t = useTranslations("ProductDetail.Tabs");
  return (
    <Tabs defaultValue="desc" className="w-full">
      <TabsList className="border-border h-auto w-full justify-start gap-6 rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value="desc"
          className="data-[state=active]:text-primary rounded-none px-0 pb-4 data-[state=active]:shadow-none"
        >
          {t("description")}
        </TabsTrigger>
        <TabsTrigger
          value="delivery"
          className="text-muted-foreground data-[state=active]:text-primary rounded-none px-0 pb-4 data-[state=active]:shadow-none"
        >
          {t("delivery")}
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="text-muted-foreground data-[state=active]:text-primary rounded-none px-0 pb-4 data-[state=active]:shadow-none"
        >
          {t("reviews")}({reviewsCount})
        </TabsTrigger>
      </TabsList>

      <TabsContent value="desc" className="py-8">
        <div className="space-y-6 lg:col-span-2">
          <h4 className="text-xl font-bold">{descriptionTitle}</h4>
          <p className="text-muted-foreground leading-relaxed">{description}</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specs.map((s) => (
              <div key={s.label} className="bg-surface rounded-lg p-4 shadow-sm">
                <span className="text-muted-foreground mb-1 block text-xs font-bold tracking-widest uppercase">
                  {s.label}
                </span>
                <span className="font-bold">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="delivery" className="py-8">
        {deliveryBlock ?? <LogisticsCard />}
      </TabsContent>

      <TabsContent value="reviews" className="py-8">
        <ProductReviews />
      </TabsContent>
    </Tabs>
  );
}
