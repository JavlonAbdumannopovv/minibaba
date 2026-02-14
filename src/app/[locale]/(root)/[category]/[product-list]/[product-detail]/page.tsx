"use client";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ProductGallery } from "./_components/product-gallery";
import ProductInfo from "./_components/product-info";
import { product } from "@/constants";
import { PriceTiers } from "./_components/price-tiers";
import { useState } from "react";
import { VariantPicker } from "./_components/variant-picker";
import { SupplierCard } from "./_components/supplier-card";
import { ProductTabs } from "./_components/product-tabs";
import { StickyPurchaseBar } from "./_components/sticky-purchase-bar";
import LanguageDropdown from "@/components/shared/language-dropdown";

export default function ProductDetailsPage() {
  const { title, rating, reviewsCount, soldCountText, isNew, id } = product;
  const [variant, setVariant] = useState<string>(product.variants.default);

  // StickyPurchaseBar callbacklari
  const handleChat = () => {
    console.log("Chat:", { productId: product.id, variant });
    // keyin: chat modal ochish / supplier chat pagega yo'naltirish
  };

  const handleRfq = () => {
    console.log("RFQ:", { productId: product.id, variant });
    // keyin: RFQ modal ochish / RFQ form
  };

  const handleAddToCart = (qty: number) => {
    console.log("Add to cart:", { productId: product.id, variant, qty });
    // keyin: cart storega qo'shish yoki API call
  };

  return (
    <main>
      <div className="mx-auto w-full max-w-7xl px-6 py-6 pb-24">
        <LanguageDropdown />
        <Breadcrumbs />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <ProductGallery />
          </div>

          <div className="space-y-6 lg:col-span-7">
            <ProductInfo
              title={title}
              rating={rating}
              reviewsCount={reviewsCount}
              soldCountText={soldCountText}
              isNew={isNew}
              productId={id}
            />

            <PriceTiers pricing={product.pricing} />
            <VariantPicker
              options={product.variants.options}
              value={variant}
              onChange={setVariant}
              title={product.variants.title}
            />
            <SupplierCard
              name={product.supplier.name}
              logo={product.supplier.logo}
              verified={product.supplier.verified}
              locationText={product.supplier.locationText}
              experienceText={product.supplier.experienceText}
              shopHref={product.supplier.shopHref}
            />
          </div>
        </div>

        <div className="border-border mt-12 border-t pt-8">
          <ProductTabs
            descriptionTitle={product.description.title}
            description={product.description.text}
            specs={product.description.specs}
            reviewsCount={product.reviewsCount}
          />
        </div>
      </div>

      <StickyPurchaseBar
        totalPrice="$1,200.00"
        moq={2}
        onChat={handleChat}
        onRfq={handleRfq}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
}
