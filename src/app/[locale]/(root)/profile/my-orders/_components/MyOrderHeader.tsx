const MyOrderHeader = () => {
  return (
    <div className="items-center justify-between lg:flex">
      <div className="flex flex-col">
        <div className="text-[30px] font-normal text-[#0F172A]">Mening buyurtmalarim</div>
        <div className="text-[16px] text-[#64748B]">Sizda jami 12 ta buyurtma mavjud</div>
      </div>
      <div className="mt-4 flex items-center justify-start gap-[8px] lg:mt-0 lg:justify-center">
        <div className="flex h-[70px] max-w-[170px] min-w-[120px] flex-col items-start justify-center rounded-[8px] border border-[#F47B251A] bg-white p-[12px]">
          <div className="text-[12px] text-[#64748B]">Jami xarajat</div>
          <div className="text-[16px] font-bold text-[#F47B25]">14,250,000 UZS</div>
        </div>
        <div className="flex h-[70px] w-[149px] min-w-[120px] flex-col items-start justify-center rounded-[8px] border border-[#F47B251A] bg-white p-[12px]">
          <div className="text-[12px] text-[#64748B]">Yetkazilmoqda</div>
          <div className="text-[16px] font-bold text-[#F47B25]">2 ta</div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderHeader;
