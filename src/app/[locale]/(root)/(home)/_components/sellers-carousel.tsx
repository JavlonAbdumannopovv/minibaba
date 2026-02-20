"use client";

import SellerCard from "@/components/cards/seller-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { verifiedSellers } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import { ShieldPlus } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";

function VerifiedSellersCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 2000, // 3 sekundda bir aylansin
      stopOnInteraction: true, // user bosganda to‘xtasin
      stopOnMouseEnter: true, // hover bo‘lsa to‘xtasin
    }),
  );

  const t = useTranslations("Home");

  return (
    <section className="space-y-4">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <ShieldPlus className="text-primary" />
          <h2 className="text-2xl font-extrabold">{t("verifiedSellers")}</h2>
        </div>
        <Link href={"/sellers"}>
          <p className="text-primary text-sm font-medium transition duration-500 hover:underline">
            {t("all")}
          </p>
        </Link>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[autoplay.current]}
        className="w-full"
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
      >
        <CarouselContent className="-ml-3">
          {verifiedSellers.map((s) => (
            <CarouselItem
              key={s.id}
              className="basis-1/1 pl-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <SellerCard seller={s} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* arrowlar (lg+ da ko'proq kerak bo'ladi) */}
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </section>
  );
}

export default VerifiedSellersCarousel;
