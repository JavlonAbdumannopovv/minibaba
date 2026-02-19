"use client";

import { InputFieldProps } from "@/types/auth";

export function InputField({
  label,
  type = "text",
  placeholder,
  error,
  registration,
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-text block text-sm font-semibold">{label}</label>

      <div className="group relative">
        <input
          type={type}
          placeholder={placeholder}
          className={[
            "text-text bg-bg border-border placeholder:text-text-muted/30 block h-12 w-full rounded-lg border pr-4 pl-[10] font-medium outline-0 transition-all",
            "focus:border-primary focus:ring-primary/20 focus:ring-1",
            error ? "border-error focus:border-error focus:ring-error/20" : "",
          ].join(" ")}
          {...registration}
        />
      </div>

      {error ? <p className="text-error text-sm font-medium">{error.message}</p> : null}
    </div>
  );
}
