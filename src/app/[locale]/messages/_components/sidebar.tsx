"use client"
import { verifiedSellers } from '@/constants'
import { Edit, Verified, VerifiedIcon } from 'lucide-react'
import ChatUser from './chatUser'
import { useEffect } from 'react'
import { useChatStore } from '@/store/chatStore'


//   id: string;
//   name: string;
//   experienceYears: number;
//   city: string;
//   reliabilityPercent: number; // 0-100
//   responseSeconds: number;
//   image: string;
//   href: string;

const ChatSidebar = () => {

    return (
        <div className='md:w-[380px] hidden md:block h-full max-w-[380px] border-r border-l bg-white border-border'>
            <div className='p-[16px] flex flex-col gap-[16px]'>
                <div className='  flex justify-between items-center'>
                    <div className='text-[18px] font-bold'>Inbox</div>
                    <div><Edit className='text-[#F47B25]' /></div>
                </div>
                <div className='flex gap-[8px] justify-start items-center'>
                    <div className={`w-[76px] h-[32px] bg-[#F47B25] flex justify-center items-center text-[12px] rounded-[9999px] text-white`}>All chats</div>
                    <div className={`w-[76px] h-[32px] bg-[#F5F2F0] flex justify-center items-center text-[12px] rounded-[9999px] text-[#181411]`}>Unread</div>
                    <div className={`w-[76px] h-[32px] bg-[#F5F2F0] flex justify-center items-center text-[12px] rounded-[9999px] text-[#181411]`}> <VerifiedIcon className='w-4 h-4 text-blue-800 mr-1' />   Verified</div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-start'>
                    {verifiedSellers.map(seller=>(
                        <ChatUser  seller={seller} key={seller.id}/>
                    ))}
            </div>
        </div>
    )
}

export default ChatSidebar