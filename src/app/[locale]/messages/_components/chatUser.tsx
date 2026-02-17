"use client";
import { useChatStore } from "@/store/chatStore";
import { Seller } from "@/types";
import { useRouter } from "next/navigation";

import React from "react";

type Props = {
  seller: Seller;
};

const ChatUser = ({ seller }: Props) => {
  const { setActiveChat, activeChatId } = useChatStore();
  const router = useRouter();
  return (
    <div
      onClick={() => {
        setActiveChat(seller.id);
        router.push(`/messages/${seller.id}`);
      }}
      className={`flex h-[80px] w-full cursor-pointer items-center justify-start gap-3 p-[16px] transition-all ${
        activeChatId == seller.id
          ? "border-l-4 border-l-[#F47B25] bg-[#F47B251A] pl-[12px]"
          : "border-l-4 border-l-transparent"
      }`}
    >
      <div className="h-[48px] w-[48px] shrink-0">
        <img
          src={seller.image}
          className="h-full w-full rounded-[8px] object-cover"
          alt={seller.name}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex w-full items-baseline justify-between">
          <div className="mr-2 truncate font-bold text-[#111827]">{seller.name}</div>
          <div className="shrink-0 text-[12px] text-gray-400">10:45 PM</div>
        </div>

        <div className="truncate text-sm text-gray-500">Sizga yangi xabar keldi...</div>
      </div>
    </div>
  );
};

export default ChatUser;
