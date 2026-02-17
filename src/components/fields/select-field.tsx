"use client";

import type { FieldError } from "react-hook-form";

type SelectFieldProps = {
  label: string;
  error?: FieldError;
  value?: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
};

export function SelectField({
  label,
  error,
  value,
  onChange,
  options,
  placeholder = "Tanlang",
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-text block text-sm font-semibold">{label}</label>

      <select
        className={[
          "text-text bg-bg border-border placeholder:text-text-muted/30 block h-14 w-full rounded-lg border px-4 text-base font-medium transition-all",
          "focus:border-primary focus:ring-primary/20 focus:ring-1",
          error ? "border-error focus:border-error focus:ring-error/20" : "",
        ].join(" ")}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      {error ? <p className="text-error text-sm font-medium">{error.message}</p> : null}
    </div>
  );
}
