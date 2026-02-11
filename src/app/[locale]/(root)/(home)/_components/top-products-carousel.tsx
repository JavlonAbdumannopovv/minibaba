"use client";

import { topProducts } from "@/constants";
import ProductCard from "@/components/cards/top-product-card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import { ChartLine } from "lucide-react";
import Link from "next/link";

export default function TopProductsCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 2000, // 3 sekundda bir aylansin
      stopOnInteraction: true, // user bosganda to‘xtasin
      stopOnMouseEnter: true, // hover bo‘lsa to‘xtasin
    }),
  );

  return (
    <section className="space-y-4">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <ChartLine className="text-primary" />
          <h2 className="text-2xl font-extrabold">Top mahsulotlar</h2>
        </div>
        <Link href={"/categories"}>
          <p className="text-primary text-sm font-medium transition duration-500 hover:underline">
            Hammasi
          </p>
        </Link>
      </div>

      <div className="relative">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <CarouselContent className="-ml-3">
            {topProducts.map((p) => (
              <CarouselItem
                key={p.id}
                className="basis-1/1 pl-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <ProductCard product={p} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* arrowlar (lg+ da ko'proq kerak bo'ladi) */}
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
