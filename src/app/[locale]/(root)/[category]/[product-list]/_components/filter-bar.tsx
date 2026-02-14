"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Filters } from "@/types";

type Props = {
  totalFound: number;
  regions: string[];
  value: Filters;
  onChange: (next: Filters) => void;
  priceMinLimit: number;
  priceMaxLimit: number;
};

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export function FilterBar({
  totalFound,
  regions,
  value,
  onChange,
  priceMaxLimit,
  priceMinLimit,
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
    set({
      regions: exists ? value.regions.filter((x) => x !== r) : [...value.regions, r],
    });
  };

  const pill = (label: string, activeText?: string) => (
    <span className="flex items-center gap-2">
      <span>{label}</span>
      {activeText ? (
        <span className="bg-muted text-foreground rounded-md px-2 py-0.5 text-xs">
          {activeText}
        </span>
      ) : null}
    </span>
  );

  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      {/* Narx */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-card hover:border-primary h-10 gap-2 rounded-lg shadow-sm"
          >
            {t("price")}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-bg border-border w-80 p-4" align="start">
          <DropdownMenuLabel className="px-0">{t("priceRange")}</DropdownMenuLabel>
          <div className="mt-3 space-y-4">
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

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <p className="text-muted-foreground text-xs">{t("min")}</p>
                <Input
                  // type="number"
                  inputMode="numeric"
                  value={priceDraft[0]}
                  onChange={(e) => {
                    const n = Number(e.target.value || 0);
                    const nextMin = clamp(n, 0, priceDraft[1]);
                    const next: [number, number] = [nextMin, priceDraft[1]];
                    setPriceDraft(next);
                  }}
                  onBlur={() => set({ priceMin: priceDraft[0], priceMax: priceDraft[1] })}
                />
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-xs">{t("max")}</p>
                <Input
                  // type="number"
                  inputMode="numeric"
                  value={priceDraft[1]}
                  onChange={(e) => {
                    const n = Number(e.target.value || priceMinLimit);
                    const nextMax = clamp(n, priceDraft[0], priceMaxLimit);
                    const next: [number, number] = [priceDraft[0], nextMax];
                    setPriceDraft(next);
                  }}
                  onBlur={() => set({ priceMin: priceDraft[0], priceMax: priceDraft[1] })}
                />
              </div>
            </div>

            <DropdownMenuSeparator />
            <div className="flex gap-2">
              <Button
                variant="secondary"
                className="rounded-lg"
                onClick={() => {
                  setPriceDraft([priceMinLimit, priceMaxLimit]);
                  set({ priceMin: priceMinLimit, priceMax: priceMaxLimit });
                }}
              >
                {t("reset")}
              </Button>
              <Button
                className="rounded-lg"
                onClick={() => set({ priceMin: priceDraft[0], priceMax: priceDraft[1] })}
              >
                {t("apply")}
              </Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* MOQ */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-card hover:border-primary h-10 gap-2 rounded-lg shadow-sm"
          >
            {t("moq")}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-bg border-border w-72 p-4" align="start">
          <DropdownMenuLabel className="px-0">{t("moqTitle")}</DropdownMenuLabel>
          <div className="mt-3 space-y-3">
            <Input
              type="number"
              inputMode="numeric"
              value={value.moqMin}
              onChange={(e) => set({ moqMin: Math.max(0, Number(e.target.value || 0)) })}
            />
            <DropdownMenuSeparator />
            <Button variant="secondary" className="rounded-lg" onClick={() => set({ moqMin: 0 })}>
              {t("reset")}
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Reyting */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-card hover:border-primary h-10 gap-2 rounded-lg shadow-sm"
          >
            {t("rating")}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-bg border-border w-72 p-4" align="start">
          <DropdownMenuLabel className="px-0">{t("ratingTitle")}</DropdownMenuLabel>
          <div className="mt-3 space-y-4">
            <Slider
              value={[value.ratingMin]}
              min={0}
              max={5}
              step={0.5}
              onValueChange={(v) => set({ ratingMin: v[0] ?? 0 })}
            />
            <p className="text-muted-foreground text-sm">
              {t("current")}:{" "}
              <span className="text-foreground font-semibold">{value.ratingMin}</span>
            </p>
            <DropdownMenuSeparator />
            <Button
              variant="secondary"
              className="rounded-lg"
              onClick={() => set({ ratingMin: 0 })}
            >
              {t("reset")}
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Hudud */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-card hover:border-primary h-10 gap-2 rounded-lg shadow-sm"
          >
            {pill(
              t("region"),
              value.regions.length
                ? t("selectedCount", { count: value.regions.length })
                : undefined,
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-bg border-border w-72 p-4" align="start">
          <DropdownMenuLabel className="px-0">{t("regionsTitle")}</DropdownMenuLabel>
          <div className="mt-3 space-y-3">
            <div className="max-h-56 space-y-2 overflow-auto pr-2">
              {regions.map((r) => {
                const checked = value.regions.includes(r);
                return (
                  <label
                    key={r}
                    className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-md px-2 py-1"
                  >
                    <Checkbox checked={checked} onCheckedChange={() => toggleRegion(r)} />
                    <span className="text-sm">{r}</span>
                  </label>
                );
              })}
            </div>

            <DropdownMenuSeparator />
            <div className="flex gap-2">
              <Button
                variant="secondary"
                className="rounded-lg"
                onClick={() => set({ regions: [] })}
              >
                {t("reset")}
              </Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="bg-border mx-2 hidden h-6 w-px sm:block" />

      <p className="text-muted-foreground text-sm font-medium">
        <span className="text-foreground font-bold">
          {totalFound.toLocaleString()} {t("countSuffix")}
        </span>{" "}
        {t("found")}
      </p>
    </div>
  );
}
