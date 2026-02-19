"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Award, Building2, SquareMenu } from "lucide-react";
import { SupplierHero } from "./_components/supplier-hero";
import { product, productsList } from "@/constants";
import { SupplierProductCard } from "@/components/cards/supplier-product-card";
import { useInfiniteSlice } from "@/hooks/use-infinite-slice";
import SupplierCompanyInfo from "./_components/supplier-company-info";
import { CertificatesUI, CertificateUIItem } from "./_components/certificate";
import { useTranslations } from "next-intl";

const STEP = 10;

const SellerDetailedPage = () => {
  const { visibleCount, isLoadingMore, hasMore, sentinelRef } = useInfiniteSlice(
    productsList.length,
    {
      step: STEP,
      rootMargin: "250px",
    },
  );

  const t = useTranslations("SupplierDetail");

  const visible = React.useMemo(() => productsList.slice(0, visibleCount), [visibleCount]);

  const certs: CertificateUIItem[] = [
    {
      id: "1",
      title: "ISO 9001:2015",
      thumbUrl:
        "https://images.unsplash.com/photo-1742415888265-d5044039d8e6?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://images.unsplash.com/photo-1742415888265-d5044039d8e6?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "jpeg",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <SupplierHero supplier={product.supplier} />

      {/* Tabs */}
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="border-border flex h-auto w-full justify-start gap-6 rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="products"
            className="data-[state=active]:text-primary hover:text-primary flex cursor-pointer items-center gap-2 rounded-none px-0 pb-4 data-[state=active]:shadow-none"
          >
            <SquareMenu />
            {t("products")}
          </TabsTrigger>
          <TabsTrigger
            value="company"
            className="text-muted-foreground data-[state=active]:text-primary hover:text-primary flex cursor-pointer items-center gap-2 rounded-none px-0 pb-4 data-[state=active]:shadow-none"
          >
            <Building2 />
            {t("companyAbout")}
          </TabsTrigger>
          <TabsTrigger
            value="certificates"
            className="text-muted-foreground data-[state=active]:text-primary hover:text-primary flex cursor-pointer items-center gap-2 rounded-none px-0 pb-4 data-[state=active]:shadow-none"
          >
            <Award />
            {t("certificates")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="py-8">
          <div className="py-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              {visible.map((p) => (
                <SupplierProductCard key={p.id} product={p} />
              ))}
            </div>

            {!productsList.length ? (
              <p className="text-muted-foreground mt-8 text-sm">{t("noProducts")}</p>
            ) : null}

            {isLoadingMore ? (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="bg-card h-[320px] animate-pulse rounded-xl border" />
                ))}
              </div>
            ) : null}

            <div ref={sentinelRef} className="h-10" />

            {productsList.length ? (
              <p className="text-muted-foreground mt-6 text-center text-xs">
                {visible.length} / {productsList.length} {!hasMore ? `(${t("all")})` : ""}
              </p>
            ) : null}
          </div>
        </TabsContent>

        <TabsContent value="company" className="py-8">
          <SupplierCompanyInfo supplier={product.supplier} />
        </TabsContent>

        <TabsContent value="certificates" className="py-8">
          <CertificatesUI items={certs} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SellerDetailedPage;
