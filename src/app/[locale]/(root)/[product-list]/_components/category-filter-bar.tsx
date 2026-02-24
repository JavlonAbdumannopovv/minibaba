"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import type { Filters } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
  totalFound: number;

  regions: string[];
  categories: string[];

  value: Filters;
  onChange: (next: Filters) => void;

  priceMinLimit: number;
  priceMaxLimit: number;
};

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

function PillButton({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-sm transition",
        "hover:bg-muted",
        active
          ? "border-primary/60 bg-primary/10 text-foreground"
          : "border-border bg-background text-muted-foreground",
      )}
    >
      {children}
    </button>
  );
}

export function CategoryFilterBar({
  totalFound,
  regions,
  categories,
  value,
  onChange,
  priceMinLimit,
  priceMaxLimit,
}: Props) {
  const t = useTranslations("Filters");

  const [priceDraft, setPriceDraft] = React.useState<[number, number]>([
    value.priceMin,
    value.priceMax,
  ]);

  React.useEffect(() => {
    setPriceDraft([value.priceMin, value.priceMax]);
  }, [value.priceMin, value.priceMax]);

  const set = (patch: Partial<Filters>) => onChange({ ...value, ...patch });

  const toggleRegion = (r: string) => {
    const exists = value.regions.includes(r);
    set({ regions: exists ? value.regions.filter((x) => x !== r) : [...value.regions, r] });
  };

  const toggleCategory = (c: string) => {
    const exists = value.categories.includes(c);
    set({
      categories: exists ? value.categories.filter((x) => x !== c) : [...value.categories, c],
    });
  };

  const resetAll = () => {
    set({
      priceMin: priceMinLimit,
      priceMax: priceMaxLimit,
      moqMin: 0,
      ratingMin: 0,
      regions: [],
      categories: [],
    });
    setPriceDraft([priceMinLimit, priceMaxLimit]);
  };

  return (
    <aside className="border-border bg-card w-full max-w-[320px] shrink-0 rounded-xl border p-4">
      {/* Header */}
      <div className="border-border border-b pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-foreground text-2xl font-semibold">
            {t("filtersTitle") ?? "Filters"}
          </h3>
          <Button
            type="button"
            variant="ghost"
            className="text-primary h-auto px-0 py-0 text-xs hover:bg-transparent"
            onClick={resetAll}
          >
            {t("resetAll") ?? "Reset All"}
          </Button>
        </div>

        {/* Total */}
        <p className="text-muted-foreground mt-2 text-xs">
          <span className="text-foreground font-semibold">
            {totalFound.toLocaleString()} {t("countSuffix") ?? "items"}
          </span>{" "}
          {t("found") ?? "found"}
        </p>
      </div>

      <div className="mt-4 space-y-6">
        {/* CATEGORIES */}
        <section className="border-border border-b py-2">
          <p className="text-1xl text-muted-foreground font-medium tracking-wide uppercase">
            {t("categories") ?? "Categories"}
          </p>

          <div className="mt-3 max-h-56 space-y-2 overflow-auto pr-2">
            {categories.map((c) => {
              const checked = value.categories.includes(c);
              return (
                <label
                  key={c}
                  className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-md px-2 py-1"
                >
                  <Checkbox checked={checked} onCheckedChange={() => toggleCategory(c)} />
                  <span className="text-foreground text-sm">{c}</span>
                </label>
              );
            })}
          </div>

          {value.categories.length ? (
            <Button
              type="button"
              variant="outline"
              className="text-muted-foreground hover:border-hover mt-4 h-auto w-full text-xs"
              onClick={() => set({ categories: [] })}
            >
              {t("clear") ?? "Clear"}
            </Button>
          ) : null}
        </section>

        {/* PRICE */}
        <section className="border-border border-b pb-4">
          <p className="text-1xl text-muted-foreground font-medium tracking-wide uppercase">
            {t("price") ?? "Price (UZS)"}
          </p>

          <div className="mt-3 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <p className="text-muted-foreground text-xs">{t("min") ?? "Min"}</p>
                <Input
                  inputMode="numeric"
                  value={priceDraft[0]}
                  onChange={(e) => {
                    const n = Number(e.target.value || 0);
                    const nextMin = clamp(n, priceMinLimit, priceDraft[1]);
                    setPriceDraft([nextMin, priceDraft[1]]);
                  }}
                  onBlur={() => set({ priceMin: priceDraft[0], priceMax: priceDraft[1] })}
                />
              </div>

              <div className="space-y-1">
                <p className="text-muted-foreground text-xs">{t("max") ?? "Max"}</p>
                <Input
                  inputMode="numeric"
                  value={priceDraft[1]}
                  onChange={(e) => {
                    const n = Number(e.target.value || priceMaxLimit);
                    const nextMax = clamp(n, priceDraft[0], priceMaxLimit);
                    setPriceDraft([priceDraft[0], nextMax]);
                  }}
                  onBlur={() => set({ priceMin: priceDraft[0], priceMax: priceDraft[1] })}
                />
              </div>
            </div>

            <Slider
              value={priceDraft}
              min={priceMinLimit}
              max={priceMaxLimit}
              step={500}
              onValueChange={(v) => setPriceDraft([v[0]!, v[1]!])}
              onValueCommit={(v) =>
                set({
                  priceMin: v[0] ?? priceMinLimit,
                  priceMax: v[1] ?? priceMaxLimit,
                })
              }
            />

            <Button
              type="button"
              variant="outline"
              className="text-muted-foreground hover:border-hover mt-4 h-auto w-full text-xs"
              onClick={() => {
                setPriceDraft([priceMinLimit, priceMaxLimit]);
                set({ priceMin: priceMinLimit, priceMax: priceMaxLimit });
              }}
            >
              {t("reset") ?? "Reset"}
            </Button>
          </div>
        </section>

        {/* LOCATION */}
        <section className="border-border border-b pb-4">
          <p className="text-1xl text-muted-foreground font-medium tracking-wide uppercase">
            {t("location") ?? "Location"}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {regions.map((r) => (
              <PillButton
                key={r}
                active={value.regions.includes(r)}
                onClick={() => toggleRegion(r)}
              >
                {r}
              </PillButton>
            ))}
          </div>

          {value.regions.length ? (
            <Button
              type="button"
              variant="outline"
              className="text-muted-foreground hover:border-hover mt-4 h-auto w-full text-xs"
              onClick={() => set({ regions: [] })}
            >
              {t("reset") ?? "Reset"}
            </Button>
          ) : null}
        </section>

        {/* MOQ */}
        <section className="border-border border-b pb-4">
          <p className="text-1xl text-muted-foreground font-medium tracking-wide uppercase">
            {t("moq") ?? "MOQ"}
          </p>

          <div className="mt-3 space-y-2">
            <Input
              type="number"
              inputMode="numeric"
              value={value.moqMin}
              onChange={(e) => set({ moqMin: Math.max(0, Number(e.target.value || 0)) })}
            />

            <Button
              type="button"
              variant="outline"
              className="text-muted-foreground hover:border-hover mt-4 h-auto w-full text-xs"
              onClick={() => set({ moqMin: 0 })}
            >
              {t("reset") ?? "Reset"}
            </Button>
          </div>
        </section>

        {/* RATING */}
        <section>
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            {t("rating") ?? "Rating"}
          </p>

          <div className="mt-3 space-y-3">
            <Slider
              value={[value.ratingMin]}
              min={0}
              max={5}
              step={0.5}
              onValueChange={(v) => set({ ratingMin: v[0] ?? 0 })}
            />
            <p className="text-muted-foreground text-sm">
              {t("current") ?? "Current"}:{" "}
              <span className="text-foreground font-semibold">{value.ratingMin}</span>
            </p>

            <Button
              type="button"
              variant="outline"
              className="text-muted-foreground hover:border-hover mt-4 h-auto w-full text-xs"
              onClick={() => set({ ratingMin: 0 })}
            >
              {t("reset") ?? "Reset"}
            </Button>
          </div>
        </section>
      </div>
    </aside>
  );
}
