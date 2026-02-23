"use client";

import { cn } from "@/lib/utils";
import { TabsList, TabsTrigger, TabsContent, Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

type VariantOption = {
  id: string;
  label: string;
  images: string[];
};

type Props = {
  title?: string;
  options: VariantOption[];
  value: string; // active variant id
  onChange: (id: string) => void;
};

export function VariantPicker({ title, options, value, onChange }: Props) {
  const t = useTranslations("ProductDetail.Variants");

  return (
    <Card className="bg-surface border-border rounded-xl">
      <CardContent className="flex flex-col gap-2 p-6">
        {title ? (
          <h4 className="text-text-muted text-sm font-bold tracking-wider uppercase">
            {t("title")}
          </h4>
        ) : null}

        <Tabs defaultValue={options[0].id} className="flex flex-col items-start">
          <TabsList className="flex flex-wrap gap-2 bg-transparent p-0">
            {options.map((opt) => {
              const active = opt.id === value;
              return (
                <TabsTrigger
                  key={opt.id}
                  value={opt.id}
                  className={cn(
                    "data-[state=active]:text-primary rounded-lg border px-2 data-[state=active]:shadow-none",
                    active
                      ? "border-primary bg-primary/5 text-primary font-bold"
                      : "hover:border-primary",
                  )}
                  onClick={() => onChange(opt.id)}
                >
                  {opt.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {options.map((opt) => (
            <TabsContent value={opt.id} className="py-8 max-sm:pt-20" key={opt.id}>
              <Image src={opt.images[0]} alt={opt.label} width={200} height={200} />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
