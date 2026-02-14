"use client";

import * as React from "react";
import { FilterBar } from "./_components/filter-bar";
import type { Filters } from "@/types";
import { productsList } from "@/constants";
import { ProductListCard } from "@/components/cards/product-list-card";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { useTranslations } from "next-intl";

const STEP = 8;

export default function ProductList() {
  const bounds = React.useMemo(() => {
    const prices = productsList.map((p) => p.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, []);

  const [filters, setFilters] = React.useState<Filters>(() => ({
    priceMin: bounds.min,
    priceMax: bounds.max,
    moqMin: 0,
    ratingMin: 0,
    regions: [],
  }));

  const regions = React.useMemo(() => {
    return Array.from(new Set(productsList.map((p) => p.region))).sort();
  }, []);

  const filtered = React.useMemo(() => {
    return productsList.filter((p) => {
      if (p.price < filters.priceMin) return false;
      if (p.price > filters.priceMax) return false;
      if (p.moq < filters.moqMin) return false;
      if (p.rating < filters.ratingMin) return false;
      if (filters.regions.length && !filters.regions.includes(p.region)) return false;
      return true;
    });
  }, [filters]);

  const t = useTranslations("Filters");

  // infinite scroll state
  const [visibleCount, setVisibleCount] = React.useState(STEP);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const loadingRef = React.useRef(false);

  // user scroll qilganini aniqlash (bir marta yetadi)
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) setHasScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // filter o'zgarsa: 8 ga qaytadi + loading reset
  React.useEffect(() => {
    setVisibleCount(STEP);
    setIsLoadingMore(false);
    loadingRef.current = false;
  }, [filters]);

  const visible = React.useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  const hasMore = visibleCount < filtered.length;

  const sentinelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        if (!hasScrolled) return;
        if (!hasMore) return;
        if (loadingRef.current) return;

        loadingRef.current = true;
        setIsLoadingMore(true);

        requestAnimationFrame(() => {
          setVisibleCount((prev) => Math.min(prev + STEP, filtered.length));
          setIsLoadingMore(false);
          loadingRef.current = false;
        });
      },
      { rootMargin: "200px", threshold: 0 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [hasMore, filtered.length, hasScrolled]);

  return (
    <main className="mx-auto max-w-7xl py-10">
      <Breadcrumbs />
      <FilterBar
        totalFound={filtered.length}
        regions={regions}
        value={filters}
        onChange={setFilters}
        priceMinLimit={bounds.min}
        priceMaxLimit={bounds.max}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((p) => (
          <ProductListCard key={p.id} product={p} />
        ))}
      </div>

      {!filtered.length ? (
        <p className="text-muted-foreground mt-8 text-sm">
          Hech narsa topilmadi. Filterlarni bo'shat.
        </p>
      ) : null}

      {/* Loading skeleton */}
      {isLoadingMore ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-card h-[320px] animate-pulse rounded-xl border" />
          ))}
        </div>
      ) : null}

      {/* sentinel */}
      <div ref={sentinelRef} className="h-10" />

      {filtered.length ? (
        <p className="text-muted-foreground mt-6 text-center text-xs">
          {visible.length} / {filtered.length} {t("countSuffix")} {t("found")}{" "}
          {!hasMore ? `(${t("all")})` : ""}
        </p>
      ) : null}
    </main>
  );
}
