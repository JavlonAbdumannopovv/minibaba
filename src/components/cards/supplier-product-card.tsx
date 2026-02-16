"use client";

import Image from "next/image";
import { Heart, Star, BadgeCheck } from "lucide-react";
import type { ProductList } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  product: ProductList;
};

export function SupplierProductCard({ product }: Props) {
  const pathname = usePathname();
  // masalan: /uz/elektronika/kompyuter

  const segments = pathname.split("/").filter(Boolean);
  // ["uz", "elektronika", "kompyuter"]

  return (
    <Link href={`${segments[2]}/${product.id}`}>
      <div className="group bg-card flex cursor-pointer flex-col overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl">
        {/* Image */}
        <div className="bg-muted relative aspect-square overflow-hidden">
          <Image
            src={product.preview}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <button
            type="button"
            className="bg-bg text-foreground hover:bg-primary hover:text-text-inverse absolute top-3 right-3 hidden h-8 w-8 cursor-pointer items-center justify-center rounded-full shadow-sm transition-colors group-hover:flex"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2 p-4">
          {/* Title */}
          <h3 className="line-clamp-2 text-sm leading-tight font-semibold md:text-base">
            {product.title}
          </h3>

          {/* Bottom */}
          <div className="mt-auto">
            <p className="text-primary text-base font-bold md:text-lg">
              {product.price.toLocaleString()} so’m
            </p>

            <div className="text-text-muted mt-1 flex items-center justify-between text-xs">
              <span className="font-medium">Min. {product.moq} dona</span>
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-current" />
                {product.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
