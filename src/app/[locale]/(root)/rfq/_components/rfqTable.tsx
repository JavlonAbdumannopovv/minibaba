import React from 'react';
import { Plus, Minus, Users, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button"; 

const RfqTable = () => {
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
    <div className="w-full  mb-6 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Yaqinda yuborilgan so'rovlar</h2>
        <a href="#" className="text-orange-500 font-medium hover:underline">Hammasini ko'rish &gt;</a>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-50">
              <th className="p-5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Mahsulot</th>
              <th className="p-5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sana</th>
              <th className="p-5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Takliflar soni</th>
              <th className="p-5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="p-5 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Amal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-5">
                  <div className="font-bold text-gray-800">{item.product}</div>
                  <div className="text-sm text-gray-400">{item.details}</div>
                </td>
                <td className="p-5 text-gray-600 font-medium">{item.date}</td>
                <td className="p-5">
                  <div className="flex items-center gap-2 text-gray-600">
                    {item.offers === "Kutilmoqda" ? (
                      <Clock className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Users className="w-4 h-4 text-orange-400" />
                    )}
                    <span className="font-medium">{item.offers}</span>
                  </div>
                </td>
                <td className="p-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-5 text-right">
                  <button className="text-orange-500 font-bold hover:text-orange-600 transition-colors">
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