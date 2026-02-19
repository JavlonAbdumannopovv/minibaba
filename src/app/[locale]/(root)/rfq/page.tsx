import React from "react";
import TitleRFQ from "./_components/rfqTitle";
import RfqForm from "./_components/rfqForm";
import { Lightbulb } from "lucide-react";

const page = () => {
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
              <div className="text-[18px]">Foydali maslahat</div>
            </div>

            <div className="font-sans text-[14px] font-medium text-[#374151]">
              Batafsil ma'lumot berilgan so'rovlar 50% ko'proq taklif oladi. Mahsulot o'lchamlari,
              materiali va sertifikat talablarini ko'rsatishni unutmang.
            </div>
          </div>

          <div className="flex h-[226px] w-full flex-col gap-[16px] rounded-[12px] border border-[#E5E7EB] bg-[#FFFFFF] p-[24px]">
            <div className="text-[16px] font-bold text-[#111827]">Jarayon qanday ishlaydi?</div>

            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center justify-start gap-[12px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F3F4F6] text-[14px] font-bold text-[#F47B25]">
                  1
                </div>
                <div className="text-[14px] font-normal text-[#4B5563]">
                  So'rovnomani to'ldiring va yuboring.
                </div>
              </div>
              <div className="flex items-center justify-start gap-[12px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F3F4F6] text-[14px] font-bold text-[#F47B25]">
                  2
                </div>
                <div className="text-[14px] font-normal text-[#4B5563]">
                  Yetkazib beruvchilar sizga o'z narxlarini taklif qilishadi.
                </div>
              </div>
              <div className="flex items-center justify-start gap-[12px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F3F4F6] text-[14px] font-bold text-[#F47B25]">
                  3
                </div>
                <div className="text-[14px] font-normal text-[#4B5563]">
                  Eng yaxshi taklifni tanlang va shartnoma tuzing.
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
            <div className="text-[14px] font-bold text-[#FFFFFF]">Logistika xizmati</div>
            <div className="text-[12px] font-normal text-[#FFFFFFB2]">
              Minibaba orqali yuklarni sug'urtalash
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
