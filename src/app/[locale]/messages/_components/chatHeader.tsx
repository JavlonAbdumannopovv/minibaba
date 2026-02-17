"use client"
import { verifiedSellers } from "@/constants"
import { useChatStore } from "@/store/chatStore"
import { MoreVertical, Store, StoreIcon } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"


const ChatHeader = () => {
    const { activeChatId } = useChatStore()
    const params = useParams()
    const seller =  verifiedSellers.find(sel=>sel.id==params.id)
    console.log(seller, params.id)
    return (
        <div className={`md:px-[24px] px-3 bg-white max-h-[75px] h-[75px] py-[16px] w-full border-b border-border border-r ${params.id ? "": "hidden"}`}>
            <div className="flex  w-full justify-between items-center" >
                <div className="flex justify-start items-start gap-2">
                    {seller && <Image alt={seller?.name} src={seller?.image} width={48}  className="rounded-[8px]" height={48}/>} 
                    <div className="flex flex-col items-start justify-center gap h-[48px]">
                        <div className="font-bold text-[16px] text-[#111827] truncate">{seller?.name}</div>
                        <div className="text-[11px] text-green-500 truncate">Online</div>
                    </div>
                </div>

                <div className="flex justify-between items-center gap-2">
                    <div className=" hidden md:flex cursor-pointer gap-2 justify-center border border-border px-[16px] py-[8px] rounded-[8px]">
                        <StoreIcon/> Visit Store
                    </div>
                    <div className="cursor-pointer">
                        <MoreVertical/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader