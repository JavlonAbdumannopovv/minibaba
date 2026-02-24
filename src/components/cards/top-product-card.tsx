import { Product } from "@/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function formatUZS(value: number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " UZS";
}

export default function ProductCard({ product }: { product: Product }) {
  const t = useTranslations("Home");

  return (
    <Link
      href={`/product-list/${product.id}`}
      className="group bg-surface border-border block min-h-[410] overflow-hidden rounded-xl border transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="bg-surface relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />

        {typeof product.discountPercent === "number" && (
          <div className="text-text-inverse absolute top-2 left-2 rounded bg-red-500 px-2 py-0.5 text-[10px] font-bold">
            -{product.discountPercent}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="group-hover:text-primary mb-2 line-clamp-2 text-sm font-medium transition-colors">
          {product.title}
        </h3>

        <div className="flex flex-col gap-1">
          <span className="text-text text-lg font-extrabold">{formatUZS(product.price)}</span>
          {product.minOrder ? (
            <span className="text-text-muted text-xs">
              {t("minOrder")}: <span className="text-text">{product.minOrder}</span>
            </span>
          ) : null}
        </div>

        {product.verified && (
          <div className="mt-3 flex items-center gap-1.5 text-[10px] font-bold text-green-600">
            <span className="material-symbols-outlined text-xs">verified</span>
            {t("verifiedSeller")}
          </div>
        )}
      </div>
    </Link>
  );
}
