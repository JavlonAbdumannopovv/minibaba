import { verifiedSellers } from '@/constants'
import { useChatStore } from '@/store/chatStore'
import { Seller } from '@/types'
import React from 'react'

type Props = {
    seller: Seller
}

const ChatUser = ({ seller }: Props) => {
    const {setActiveChat, activeChatId} = useChatStore()
    
    return (
        <div onClick={()=>setActiveChat(seller.id)} className={`p-[16px] w-full h-[80px] flex justify-start gap-3 items-center cursor-pointer transition-all ${activeChatId==seller.id ? "border-l-[#F47B25] border-l-4 bg-[#F47B251A] pl-[12px]" : "border-l-4 border-l-transparent"
            }`}>

            <div className='w-[48px] h-[48px] shrink-0'>
                <img
                    src={seller.image}
                    className='w-full h-full rounded-[8px] object-cover'
                    alt={seller.name}
                />
            </div>


            <div className='flex-1 min-w-0'>
                <div className='flex justify-between items-baseline w-full'>
                    <div className='font-bold text-[#111827] truncate mr-2'>
                        {seller.name}
                    </div>
                    <div className='text-[12px] text-gray-400 shrink-0'>
                        10:45 PM
                    </div>
                </div>


                <div className='text-sm text-gray-500 truncate'>
                    Sizga yangi xabar keldi...
                </div>
            </div>
        </div>
    )
}

export default ChatUser