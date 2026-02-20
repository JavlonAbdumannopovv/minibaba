import { Seller } from "@/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function SellerCard({ seller }: { seller: Seller }) {
  const t = useTranslations("Home");

  return (
    <div className="border-border bg-surface rounded-xl border p-5 text-center">
      <div className="border-primary bg-surface mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-2 p-1">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image src={seller.image} alt="Company Logo" fill className="object-cover" sizes="80px" />
        </div>
      </div>

      <h3 className="text-lg font-bold">{seller.name}</h3>
      <p className="text-text-muted mb-4 text-xs">
        {seller.experienceYears} {t("experience")} • {seller.city}
      </p>

      <div className="flex w-full gap-2">
        <div className="bg-bg flex-1 rounded p-2 text-[10px] font-bold shadow">
          {seller.reliabilityPercent}% <br />
          <span className="text-text-muted font-normal">{t("reliability")}</span>
        </div>
        <div className="bg-bg flex-1 rounded p-2 text-[10px] font-bold shadow">
          {seller.responseSeconds}s <br />
          <span className="text-text-muted font-normal">{t("responseTime")}</span>
        </div>
      </div>

      <Link
        href={seller.href}
        className="border-primary text-primary hover:bg-primary mt-4 inline-flex w-full items-center justify-center rounded-lg border py-2 text-sm font-bold transition-colors hover:text-white"
      >
        {t("sellerPage")}
      </Link>
    </div>
  );
}

export default SellerCard;
