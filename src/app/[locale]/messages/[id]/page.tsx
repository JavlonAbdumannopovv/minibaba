"use client";
import React, { useState, useEffect, useRef } from "react";
import { useChatStore } from "@/store/chatStore";
import { verifiedSellers } from "@/constants";
import { Send, Plus, Smile } from "lucide-react";
import { useParams } from "next/navigation";
import ChatHeader from "../_components/chatHeader";
import ChatSidebar from "../_components/sidebar";

const ChatWindow = () => {
  const { chats, activeChatId, sendMessage } = useChatStore();
  const [inputText, setInputText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const activeChat = chats.find((c) => c.sellerId === params.id);
  const seller = verifiedSellers.find((s) => s.id === params.id);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeChat?.messages]);

  const handleSend = () => {
    if (inputText.trim() && activeChat) {
      sendMessage(activeChat.id, inputText);
      setInputText("");
    }
  };

  if (!seller) {
    return (
      <div className="flex h-full flex-1 items-center justify-center bg-gray-50 font-bold">
        Suhbatni boshlash uchun chatni tanlang
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto h-[calc(100vh-70px)] max-w-7xl items-start justify-start md:flex md:px-3">
        <div className="hidden h-full md:block">
          <ChatSidebar />
        </div>
        <div className="h-full w-full">
          <ChatHeader />
          <div className="flex h-[calc(100vh-145px)] w-full flex-1 flex-col overflow-hidden">
            <div ref={scrollRef} className="bg-bg flex-1 space-y-6 overflow-y-auto p-6">
              {activeChat?.messages.length === 0 ? (
                <div className="flex items-center justify-center text-sm text-gray-400">
                  Hali xabarlar yo'q. Suhbatni boshlang!
                </div>
              ) : (
                <>
                  <div className="my-4 flex justify-center">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-500">
                      BUGUN
                    </span>
                  </div>
                  {activeChat?.messages.map((msg: any) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl p-4 shadow-sm ${
                          msg.sender === "me"
                            ? "rounded-tr-none bg-[#F47B25] text-white"
                            : "rounded-tl-none border border-gray-100 bg-white text-gray-800"
                        }`}
                      >
                        <p className="text-[15px]">{msg.text}</p>
                        <div className={`mt-1 text-right text-[10px] opacity-70`}>
                          {msg.timestamp || "10:45"}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="border-border bottom-0 flex h-[150px] max-h-[150px] w-full shrink-0 flex-col items-start justify-center border-t bg-white md:p-3">
              <div className="flex gap-2 overflow-x-auto pb-2 md:mb-4">
                {["Namuna so'rash", "Narx so'rash", "Omborda bormi?"].map((btn) => (
                  <button
                    key={btn}
                    className="rounded-xl border border-gray-200 px-4 py-1.5 text-sm font-bold whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    {btn}
                  </button>
                ))}
              </div>

              <div className="flex w-full items-center gap-1 rounded-[20px] bg-[#F3F4F6] p-2 pr-3 md:gap-2">
                <button className="rounded-full text-gray-500 transition-colors hover:bg-gray-200 md:p-2">
                  <Plus className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button className="rounded-full text-gray-500 transition-colors hover:bg-gray-200 md:p-2">
                  <Smile className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Yetkazib beruvchiga xabar yozing..."
                  className="flex-1 border-none bg-transparent py-2 text-[15px] outline-none"
                />
                <button
                  onClick={handleSend}
                  className="rounded-xl bg-[#F47B25] p-3 text-white shadow-md transition-all active:scale-95"
                >
                  <Send className="h-5 w-5 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
