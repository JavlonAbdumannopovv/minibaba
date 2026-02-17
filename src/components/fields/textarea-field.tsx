import { FieldError } from "react-hook-form";

type TextareaFieldProps = {
  label: string;
  error?: FieldError;
  value?: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export function TextareaField({ label, error, value, onChange, placeholder }: TextareaFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-text block text-sm font-semibold">{label}</label>

      <textarea
        className={[
          "text-text bg-bg border-border placeholder:text-text-muted/30 block min-h-24 w-full resize-none rounded-lg border p-4 text-base font-medium transition-all",
          "focus:border-primary focus:ring-primary/20 focus:ring-1",
          error ? "border-error focus:border-error focus:ring-error/20" : "",
        ].join(" ")}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />

      {error ? <p className="text-error text-sm font-medium">{error.message}</p> : null}
    </div>
  );
}
