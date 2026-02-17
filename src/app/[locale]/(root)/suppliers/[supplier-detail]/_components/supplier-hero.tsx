import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BadgeCheck, MapPin, Star, Calendar, Zap, Plus, Mail } from "lucide-react";
import { Supplier } from "@/types/product.type";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  supplier: Supplier;
  className?: string;
  onFollow?: () => void;
  onMessage?: () => void;
};

export function SupplierHero({ supplier, className, onFollow, onMessage }: Props) {
  const t = useTranslations("SupplierDetail");

  return (
    <section
      className={cn("border-border bg-surface mb-8 rounded-xl border p-6 shadow-sm", className)}
    >
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="flex flex-col items-start gap-6 md:flex-row">
          {/* Logo */}
          <div className="relative">
            <div className="border-border bg-surface relative h-32 w-32 overflow-hidden rounded-xl border">
              <Image
                src={supplier.logo}
                alt={`${supplier.name} logotipi`}
                fill
                className="object-cover"
                sizes="128px"
                priority
              />
            </div>

            {supplier.verified ? (
              <div className="border-border text-text-inverse absolute -right-2 -bottom-2 rounded-full border-4 bg-blue-500 p-1">
                <BadgeCheck className="h-4 w-4" />
              </div>
            ) : null}
          </div>

          {/* Info */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-text text-3xl font-extrabold">{supplier.name}</h1>
            </div>

            <p className="text-text-muted flex items-center gap-2 font-medium">
              <MapPin className="h-4 w-4" />
              {supplier.locationText}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
              {/* Rating */}
              <div className="flex items-center gap-1">
                <Star className="text-primary fill-primary h-5 w-5" />
                <span className="text-text font-bold">{supplier.rating.toFixed(1)}</span>
                <span className="text-text-muted text-sm">
                  ({supplier.reviewCount} {t("reviews")})
                </span>
              </div>

              {/* Years */}
              <div className="text-text-muted flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{supplier.experienceText}</span>
              </div>

              {/* Reply rate */}
              <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                <Zap className="h-4 w-4" />
                <span>
                  {supplier.replyRate}% {t("answerDegree")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex w-full flex-row gap-3 sm:flex-row lg:w-auto">
          <Button
            type="button"
            variant="secondary"
            onClick={onFollow}
            className="bg-surface text-text hover:bg-bg flex-1 px-8 py-6 font-bold lg:flex-none"
          >
            <Plus className="mr-2 h-4 w-4" />
            {t("follow")}
          </Button>

          <Link href={"/messages"}>
            <Button
              type="button"
              onClick={onMessage}
              className="bg-primary shadow-primary/20 text-text-inverse flex-1 px-8 py-6 font-bold shadow-lg hover:opacity-90 lg:flex-none"
            >
              <Mail className="mr-2 h-4 w-4" />
              {t("sendMessage")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
