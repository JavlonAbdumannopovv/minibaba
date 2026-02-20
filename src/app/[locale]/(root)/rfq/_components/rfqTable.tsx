import React from "react";
import { Plus, Minus, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const RfqTable = () => {
  const t = useTranslations("RFQ");
  const data = [
    {
      id: 1,
      product: "Polietilen granulalar",
      details: "5 tonna • Toshkent",
      date: "14 Oktabr, 2023",
      offers: "12 ta taklif",
      status: "Faol",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      id: 2,
      product: "Qurilish mixlari",
      details: "500 kg • Samarqand",
      date: "12 Oktabr, 2023",
      offers: "8 ta taklif",
      status: "Yakunlandi",
      statusColor: "bg-gray-100 text-gray-500",
    },
    {
      id: 3,
      product: "Ofis qog'ozi A4",
      details: "200 quti • Namangan",
      date: "10 Oktabr, 2023",
      offers: "Kutilmoqda",
      status: "Ko'rib chiqilmoqda",
      statusColor: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="mb-6 w-full">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">{t("recentRequests.title")}</h2>
        <a href="#" className="font-medium text-orange-500 hover:underline">
          {t("recentRequests.viewAll")} &gt;
        </a>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-50">
              <th className="p-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                {t("recentRequests.table.product")}
              </th>
              <th className="p-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                {t("recentRequests.table.date")}
              </th>
              <th className="p-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                {t("recentRequests.table.offers")}
              </th>
              <th className="p-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                {t("recentRequests.table.status")}
              </th>
              <th className="p-5 text-right text-xs font-semibold tracking-wider text-gray-400 uppercase">
                {t("recentRequests.table.action")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-50 transition-colors hover:bg-gray-50"
              >
                <td className="p-5">
                  <div className="font-bold text-gray-800">{item.product}</div>
                  <div className="text-sm text-gray-400">{item.details}</div>
                </td>
                <td className="p-5 font-medium text-gray-600">{item.date}</td>
                <td className="p-5">
                  <div className="flex items-center gap-2 text-gray-600">
                    {item.offers === "Kutilmoqda" ? (
                      <Clock className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Users className="h-4 w-4 text-orange-400" />
                    )}
                    <span className="font-medium">{item.offers}</span>
                  </div>
                </td>
                <td className="p-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-5 text-right">
                  <button className="font-bold text-orange-500 transition-colors hover:text-orange-600">
                    Ko'rish
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RfqTable;
