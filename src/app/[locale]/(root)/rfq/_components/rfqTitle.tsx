"use client"
import { useTranslations } from "next-intl";


const TitleRFQ = () => {
  const t = useTranslations("RFQ")
  return (
    <div className="">
      <div className="p-0 text-[30px] font-extrabold">{t("title")}</div>
      <div>{t("description")}</div>
    </div>
  );
};

export default TitleRFQ;
