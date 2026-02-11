"use client";

import * as React from "react";
import Link from "next/link";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { heroSlides } from "@/constants";

export default function HeroBannerSlider() {
  const [active, setActive] = React.useState(0);

  const [api, setApi] = React.useState<CarouselApi | null>(null);

  return (
    <div className="col-span-12 lg:col-span-9">
      <div className="bg-primary relative overflow-hidden rounded-xl shadow-lg">
        <Carousel
          opts={{ loop: true }}
          setApi={(a) => {
            setApi(a);
            if (!a) return;
            setActive(a.selectedScrollSnap());
            a.on("select", () => setActive(a.selectedScrollSnap()));
          }}
        >
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative h-[400] overflow-hidden">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${slide.image}')` }}
                    aria-label={slide.title}
                    role="img"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center bg-linear-to-r from-black/60 to-transparent px-8 md:px-16">
                    <div className="text-text-inverse max-w-md">
                      <span className="bg-primary mb-4 inline-block rounded px-3 py-1 text-xs font-bold tracking-wider uppercase">
                        {slide.tag}
                      </span>

                      <h2 className="mb-4 text-3xl leading-tight font-extrabold md:text-5xl">
                        {slide.title}
                      </h2>

                      <p className="mb-6 text-lg opacity-90">{slide.description}</p>

                      <button className="text-primary bg-surface hover:bg-primary hover:text-surface inline-flex rounded-lg px-8 py-3 font-bold transition-all duration-300">
                        <Link href={slide.href}>Batafsil</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots */}
          <div className="absolute right-8 bottom-4 flex gap-2">
            {heroSlides.map((_: any, i: number) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                className={[
                  "h-1 cursor-pointer rounded-full transition-all",
                  i === active ? "bg-surface w-8" : "bg-surface/40 hover:bg-surface/60 w-2",
                ].join(" ")}
                onClick={() => {
                  api?.scrollTo(i);
                }}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
}
