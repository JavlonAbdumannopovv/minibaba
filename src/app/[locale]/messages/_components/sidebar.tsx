"use client";
import { verifiedSellers } from "@/constants";
import { Edit, Verified, VerifiedIcon } from "lucide-react";
import ChatUser from "./chatUser";
import { useEffect } from "react";
import { useChatStore } from "@/store/chatStore";

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
    <div className="border-border h-full w-full border-r border-l bg-white md:w-[380px] md:max-w-[380px]">
      <div className="flex flex-col gap-[16px] p-[16px]">
        <div className="flex items-center justify-between">
          <div className="text-[18px] font-bold">Inbox</div>
          <div>
            <Edit className="text-[#F47B25]" />
          </div>
        </div>
        <div className="flex items-center justify-start gap-[8px]">
          <div
            className={`flex h-[32px] w-[76px] items-center justify-center rounded-[9999px] bg-[#F47B25] text-[12px] text-white`}
          >
            All chats
          </div>
          <div
            className={`flex h-[32px] w-[76px] items-center justify-center rounded-[9999px] bg-[#F5F2F0] text-[12px] text-[#181411]`}
          >
            Unread
          </div>
          <div
            className={`flex h-[32px] w-[76px] items-center justify-center rounded-[9999px] bg-[#F5F2F0] text-[12px] text-[#181411]`}
          >
            {" "}
            <VerifiedIcon className="mr-1 h-4 w-4 text-blue-800" /> Verified
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        {verifiedSellers.map((seller) => (
          <ChatUser seller={seller} key={seller.id} />
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
