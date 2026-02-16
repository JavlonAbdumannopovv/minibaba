"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileText, X } from "lucide-react";

export type CertificateUIItem = {
  id: string;
  title: string;
  url: string; // jpeg yoki pdf link
  type: "jpeg" | "pdf";
  thumbUrl?: string; // jpeg uchun (optional)
};

export function CertificatesUI({ items }: { items: CertificateUIItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <Dialog key={c.id}>
          <DialogTrigger asChild>
            <Card className="group cursor-pointer overflow-hidden border transition-shadow hover:shadow-md">
              <CardContent className="p-0">
                <div className="bg-muted relative aspect-4/3 w-full overflow-hidden">
                  {c.type === "jpeg" ? (
                    <Image
                      src={c.thumbUrl ?? c.url}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 360px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="text-muted-foreground flex flex-col items-center gap-2">
                        <FileText className="h-10 w-10" />
                        <span className="text-xs font-medium">PDF</span>
                      </div>
                    </div>
                  )}

                  {/* title overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-3">
                    <p className="text-text-inverse line-clamp-2 text-sm font-semibold">
                      {c.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>

          <DialogContent className="max-w-4xl border-none">
            <DialogHeader>
              <DialogTitle className="text-text-inverse">{c.title}</DialogTitle>
            </DialogHeader>

            <DialogClose asChild className="bg-surface">
              <button
                className="absolute top-0 right-0 cursor-pointer rounded-md p-1"
                aria-label="Close"
              >
                <X className="text h-8 w-8 cursor-pointer" />
              </button>
            </DialogClose>

            {c.type === "jpeg" ? (
              <div className="bg-muted border-border relative h-[70vh] w-full overflow-hidden rounded-lg border-none">
                <Image
                  src={c.url}
                  alt={c.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              </div>
            ) : (
              <div className="bg-muted h-[70vh] w-full overflow-hidden rounded-lg border">
                <iframe title={c.title} src={c.url} className="h-full w-full" loading="lazy" />
              </div>
            )}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
