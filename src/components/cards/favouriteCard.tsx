"use client";

import Image from "next/image";
import { Heart, Star, BadgeCheck } from "lucide-react";
import type { ProductList } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

type Props = {
    product: ProductList;
};

export function FavouriteCard({ product }: Props) {
    const pathname = usePathname();
    // masalan: /uz/elektronika/kompyuter

    const segments = pathname.split("/").filter(Boolean);
    // ["uz", "elektronika", "kompyuter"]

    const t = useTranslations("Home");

    return (
        <Link href={`${segments[2]}/${product.id}`}>
            <div className="group bg-card flex cursor-pointer md:min-h-96 h-72 flex-col overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl">
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
                        className="bg-bg text-foreground  hover:text-text-inverse absolute top-3 right-3  h-8 w-8 cursor-pointer items-center flex justify-center rounded-full shadow-sm transition-colors "
                    >
                        <Heart className="h-4 w-4 fill-red-600 text-red-600" />
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
                            {product.price.toLocaleString()} sum
                        </p>

                        <div className="text-text-muted mt-1 flex items-center justify-between text-xs">
                            <span className="font-medium">
                                {t("minOrder")}: {product.moq}
                            </span>
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
