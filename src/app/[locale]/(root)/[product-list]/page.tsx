"use client";

import * as React from "react";
import type { Filters } from "@/types";
import { productsList } from "@/constants";
import { ProductListCard } from "@/components/cards/product-list-card";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { CategoryFilterBar } from "./_components/category-filter-bar";

const STEP = 8;

export default function ProductListPage() {
  const bounds = React.useMemo(() => {
    const prices = productsList.map((p) => p.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, []);

  const regions = React.useMemo(() => {
    return Array.from(new Set(productsList.map((p) => p.region))).sort();
  }, []);

  const categories = React.useMemo(() => {
    return Array.from(new Set(productsList.map((p) => p.category))).sort();
  }, []);

  const [filters, setFilters] = React.useState<Filters>(() => ({
    priceMin: bounds.min,
    priceMax: bounds.max,
    moqMin: 0,
    ratingMin: 0,
    regions: [],
    categories: [],
  }));

  const filtered = React.useMemo(() => {
    return productsList.filter((p) => {
      if (p.price < filters.priceMin) return false;
      if (p.price > filters.priceMax) return false;
      if (p.moq < filters.moqMin) return false;
      if (p.rating < filters.ratingMin) return false;

      if (filters.regions.length && !filters.regions.includes(p.region)) return false;
      if (filters.categories.length && !filters.categories.includes(p.category)) return false;

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

  // filter o'zgarsa: STEP ga qaytadi + loading reset
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
    <div>
      <Breadcrumbs />

      {/* md da ko‘rinadi, lg da ko‘rinmaydi: sheet trigger */}
      <div className="mt-4 flex items-center justify-between gap-3 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-xl">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="bg-surface w-[92vw] max-w-[360px] p-0">
            <SheetHeader className="border-border border-b p-4">
              <SheetTitle>{t("filtersTitle")}</SheetTitle>
            </SheetHeader>

            <div className="h-[calc(100vh-64px)] overflow-auto p-4">
              <CategoryFilterBar
                totalFound={filtered.length}
                regions={regions}
                categories={categories}
                value={filters}
                onChange={setFilters}
                priceMinLimit={bounds.min}
                priceMaxLimit={bounds.max}
              />
            </div>
          </SheetContent>
        </Sheet>

        <p className="text-muted-foreground text-sm">
          <span className="text-foreground font-semibold">
            {filtered.length.toLocaleString()} {t("countSuffix")}
          </span>{" "}
          {t("found")}
        </p>
      </div>

      <div className="mt-4 flex gap-4">
        {/* lg da ko‘rinadi, md va pastda ko‘rinmaydi */}
        <div className="hidden lg:block">
          <CategoryFilterBar
            totalFound={filtered.length}
            regions={regions}
            categories={categories}
            value={filters}
            onChange={setFilters}
            priceMinLimit={bounds.min}
            priceMaxLimit={bounds.max}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProductListCard key={p.id} product={p} />
            ))}
          </div>

          {!filtered.length ? (
            <p className="text-muted-foreground mt-8 text-sm">
              Hech narsa topilmadi. Filterlarni bo‘shat.
            </p>
          ) : null}

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
        </div>
      </div>
    </div>
  );
}
