"use client";
import TitleRFQ from "./_components/rfqTitle";
import RfqForm from "./_components/rfqForm";
import { Lightbulb } from "lucide-react";
import RfqTable from "./_components/rfqTable";
import { useTranslations } from "next-intl";
const page = () => {
  const t = useTranslations("RFQ");
  return (
    <div>
      <div className="gap-[32px] md:flex">
        <div className="flex flex-1 flex-col items-start justify-start gap-[16px] py-[32px]">
          <TitleRFQ />
          <RfqForm />
        </div>

        <div className="flex max-w-[320px] flex-col gap-[24px] pt-[32px] pr-0">
          <div className="mx-auto flex h-[185px] w-[320px] max-w-[320px] flex-col gap-[15px] rounded-[12px] border border-[#F47B2533] bg-[#F47B251A] p-[24px]">
            <div className="flex gap-[12px] font-sans font-bold text-[#F47B25]">
              <Lightbulb className="" />
              <div className="text-[18px]">{t("tips.title")}</div>
            </div>

            <div className="font-sans text-[14px] font-medium text-[#374151]">
              {t("tips.content")}
            </div>
          </div>

          <div className="flex h-[226px] w-full flex-col gap-[16px] rounded-[12px] border border-[#E5E7EB] bg-[#FFFFFF] p-[24px]">
            <div className="text-[16px] font-bold text-[#111827]">{t("howItWorks.title")}</div>

            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center justify-start gap-[12px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F3F4F6] text-[14px] font-bold text-[#F47B25]">
                  1
                </div>
                <div className="text-[14px] font-normal text-[#4B5563]">
                  {t("howItWorks.step1")}
                </div>
              </div>
              <div className="flex items-center justify-start gap-[12px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F3F4F6] text-[14px] font-bold text-[#F47B25]">
                  2
                </div>
                <div className="text-[14px] font-normal text-[#4B5563]">
                  {t("howItWorks.step2")}
                </div>
              </div>
              <div className="flex items-center justify-start gap-[12px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F3F4F6] text-[14px] font-bold text-[#F47B25]">
                  3
                </div>
                <div className="text-[14px] font-normal text-[#4B5563]">
                  {t("howItWorks.step3")}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), transparent), url('/logbase.png')`,
            }}
            className="flex h-[192px] w-full flex-col justify-end rounded-[12px] bg-cover bg-center bg-no-repeat p-[16px]"
          >
            <div className="text-[14px] font-bold text-[#FFFFFF]"> {t("logistics.title")}</div>
            <div className="text-[12px] font-normal text-[#FFFFFFB2]">
              {t("logistics.description")}
            </div>
          </div>
        </div>
      </div>
      <RfqTable />
    </div>
  );
};

export default page;
