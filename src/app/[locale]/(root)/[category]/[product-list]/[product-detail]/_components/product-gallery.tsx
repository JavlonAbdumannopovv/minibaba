// src/app/(lng)/(shop)/[category]/[subcategory]/[slug]/_components/product-gallery.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { product } from "@/constants";

export function ProductGallery() {
  const [active, setActive] = React.useState(0);
  const images = product.images;

  return (
    <>
      <div className="bg-card relative aspect-square overflow-hidden rounded-xl border">
        <Image
          src={images[active]!}
          alt="Product image"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 520px"
        />
      </div>

      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {images.map((src, idx) => {
          const isActive = idx === active;
          return (
            <button
              key={src}
              type="button"
              onClick={() => setActive(idx)}
              className={cn(
                "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border transition-opacity",
                isActive
                  ? "border-primary ring-primary ring-offset-background ring-2 ring-offset-2"
                  : "border-border opacity-70 hover:opacity-100",
              )}
            >
              <Image
                src={src}
                alt={`Thumb ${idx + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
