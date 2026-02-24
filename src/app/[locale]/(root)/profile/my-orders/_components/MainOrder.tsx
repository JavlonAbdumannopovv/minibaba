import React, { useState } from "react";

const tabs = [
  { id: 1, name: "Hammasi", isActive: true },
  { id: 2, name: "To'lanmagan", isActive: false },
  { id: 3, name: "Yetkazilmoqda", isActive: false },
  { id: 4, name: "Yakunlandi", isActive: false },
  { id: 5, name: "Bekor qilindi", isActive: false },
];

const MainOrder = () => {
  const [actibeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div>
      <div className="no-scrollbar flex items-center justify-start overflow-x-auto border-b border-gray-100">
        {tabs.map((tab, ind) => (
          <div
            key={ind}
            onClick={() => setActiveTab(tab.id)}
            className={` ${actibeTab === tab.id ? "border-b-2 border-b-[#F47B25] text-[#F47B25]" : "text-[#64748B]"} cursor-pointer px-[24px] py-[12px] text-[16px] font-bold whitespace-nowrap`}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainOrder;
