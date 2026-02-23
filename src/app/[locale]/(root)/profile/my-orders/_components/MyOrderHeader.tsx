
const MyOrderHeader = () => {
    return (
        <div className="lg:flex justify-between items-center">
            <div className="flex flex-col">
                <div className="text-[30px] text-[#0F172A] font-normal">Mening buyurtmalarim</div>
                <div className="text-[#64748B] text-[16px]">Sizda jami 12 ta buyurtma mavjud</div>
            </div>
            <div className="flex lg:justify-center justify-start mt-4  lg:mt-0 items-center gap-[8px]">
                <div className="min-w-[120px] w-[149px] h-[70px] p-[12px] flex flex-col justify-center items-start rounded-[8px] border border-[#F47B251A]  bg-white">
                    <div className="text-[12px] text-[#64748B]">Jami xarajat</div>
                    <div className="text-[16px] font-bold text-[#F47B25]">14,250,000 UZS</div>
                </div>
                <div className="min-w-[120px] w-[149px] h-[70px] p-[12px] flex flex-col justify-center items-start rounded-[8px] border border-[#F47B251A]  bg-white">
                    <div className="text-[12px] text-[#64748B]">Yetkazilmoqda</div>
                    <div className="text-[16px] font-bold text-[#F47B25]">2 ta</div>
                </div>
            </div>
        </div>
    )
}

export default MyOrderHeader