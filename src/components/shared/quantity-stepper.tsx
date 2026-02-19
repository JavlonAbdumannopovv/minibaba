"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  onChange: (next: number) => void;

  min?: number; // default: 1
  step?: number; // default: 1
  max?: number; // optional

  className?: string;
  inputClassName?: string;

  ariaLabel?: string;
};

function clamp(n: number, min: number, max?: number) {
  if (Number.isNaN(n)) return min;
  if (max != null) return Math.min(Math.max(n, min), max);
  return Math.max(n, min);
}

function snapToStep(n: number, min: number, step: number) {
  // min dan boshlab stepga moslab yaqinlashtiramiz
  const offset = n - min;
  const snapped = min + Math.round(offset / step) * step;
  return snapped;
}

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  step = 1,
  max,
  className,
  inputClassName,
  ariaLabel = "quantity",
}: Props) {
  // typing uchun local string state (value har doim number bo‘lsin)
  const [text, setText] = React.useState(String(value));

  React.useEffect(() => {
    // tashqi value o‘zgarsa input ham yangilansin
    setText(String(value));
  }, [value]);

  const canDec = value > min;
  const canInc = max != null ? value < max : true;

  const commit = React.useCallback(
    (raw: string) => {
      // faqat raqamlarni qoldiramiz (space, harf, minus, etc. yo‘q)
      const cleaned = raw.replace(/[^\d]/g, "");
      const num = cleaned ? Number(cleaned) : NaN;

      let next = clamp(num, min, max);
      next = snapToStep(next, min, step);
      next = clamp(next, min, max);

      setText(String(next));
      onChange(next);
    },
    [min, max, step, onChange],
  );

  const dec = () => {
    if (!canDec) return;
    const next = clamp(value - step, min, max);
    setText(String(next));
    onChange(next);
  };

  const inc = () => {
    if (!canInc) return;
    const next = clamp(value + step, min, max);
    setText(String(next));
    onChange(next);
  };

  return (
    <div
      className={cn(
        "flex h-10 items-center overflow-hidden rounded-lg border border-[#e6dfdb] dark:border-[#3d2b1f]",
        className,
      )}
      aria-label={ariaLabel}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-none hover:bg-[#f5f2f0] dark:hover:bg-[#2d1e15]"
        onClick={dec}
        disabled={!canDec}
        aria-label="decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <Input
        type="text"
        inputMode="numeric"
        className={cn(
          "h-10 w-16 rounded-none border-0 bg-transparent px-0 text-center text-sm font-bold focus-visible:ring-0",
          inputClassName,
        )}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={() => commit(text)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            commit(text);
          }
        }}
        aria-label="quantity input"
      />

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-none hover:bg-[#f5f2f0] dark:hover:bg-[#2d1e15]"
        onClick={inc}
        disabled={!canInc}
        aria-label="increase quantity"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
