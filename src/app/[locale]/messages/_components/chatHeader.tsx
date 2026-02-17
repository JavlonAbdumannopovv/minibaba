"use client";
import { verifiedSellers } from "@/constants";
import { useChatStore } from "@/store/chatStore";
import { MoreVertical, Store, StoreIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

const ChatHeader = () => {
  const { activeChatId } = useChatStore();
  const params = useParams();
  const seller = verifiedSellers.find((sel) => sel.id == params.id);
  console.log(seller, params.id);
  return (
    <div
      className={`border-border h-[75px] max-h-[75px] w-full border-r border-b bg-white px-3 py-[16px] md:px-[24px] ${params.id ? "" : "hidden"}`}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-start justify-start gap-2">
          {seller && (
            <Image
              alt={seller?.name}
              src={seller?.image}
              width={48}
              className="rounded-[8px]"
              height={48}
            />
          )}
          <div className="gap flex h-[48px] flex-col items-start justify-center">
            <div className="truncate text-[16px] font-bold text-[#111827]">{seller?.name}</div>
            <div className="truncate text-[11px] text-green-500">Online</div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="border-border hidden cursor-pointer justify-center gap-2 rounded-[8px] border px-[16px] py-[8px] md:flex">
            <StoreIcon /> Visit Store
          </div>
          <div className="cursor-pointer">
            <MoreVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
