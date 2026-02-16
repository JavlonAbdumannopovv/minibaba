"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useChatStore } from "@/store/chatStore";
import { verifiedSellers } from "@/constants";
import { Send, Plus, Smile } from 'lucide-react';

const ChatWindow = () => {
  const { chats, activeChatId, sendMessage } = useChatStore();
  const [inputText, setInputText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeChat = chats.find((c) => c.sellerId === activeChatId);
  const seller = verifiedSellers.find((s) => s.id === activeChatId);

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
      <div className="flex-1 flex items-center justify-center bg-gray-50 text-gray-400">
        Suhbatni boshlash uchun chatni tanlang
      </div>
    );
  }

  return (
    <div className="flex-1 h-[calc(100vh-145px)] w-full flex flex-col overflow-hidden">

      <div 
        ref={scrollRef} 
        className=" bg-bg flex-1 overflow-y-auto p-6 space-y-6"
      >
        {activeChat?.messages.length === 0 ? (
          <div className=" flex items-center justify-center text-gray-400 text-sm">
            Hali xabarlar yo'q. Suhbatni boshlang!
          </div>
        ) : (
          <>
            <div className="flex justify-center my-4">
              <span className="bg-gray-100 text-gray-500 text-[11px] px-3 py-1 rounded-full font-medium">BUGUN</span>
            </div>
            {activeChat?.messages.map((msg: any) => (
              <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-4 max-w-[70%] rounded-2xl shadow-sm ${
                  msg.sender === 'me' 
                    ? 'bg-[#F47B25] text-white rounded-tr-none' 
                    : 'bg-white border border-gray-100 rounded-tl-none text-gray-800'
                }`}>
                  <p className="text-[15px]">{msg.text}</p>
                  <div className={`text-[10px] mt-1 text-right opacity-70`}>
                    {msg.timestamp || "10:45"}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="h-[150px] flex flex-col items-start justify-center max-h-[150px] border-t border-border w-full bottom-0 shrink-0 md:p-3 bg-white ">
   
        <div className="flex  gap-2 md:mb-4 overflow-x-auto pb-2">
          {["Namuna so'rash", "Narx so'rash", "Omborda bormi?"].map((btn) => (
            <button key={btn} className="whitespace-nowrap px-4 py-1.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
              {btn}
            </button>
          ))}
        </div>


        <div className=" flex items-center md:gap-2 gap-1 w-full bg-[#F3F4F6] p-2 pr-3 rounded-[20px]">
          <button className="md:p-2 text-gray-500 hover:bg-gray-200 rounded-full transition-colors">
            <Plus className="md:w-6 w-5 h-5 md:h-6" />
          </button>
          <button className="md:p-2 text-gray-500 hover:bg-gray-200 rounded-full transition-colors">
            <Smile className="md:w-6 w-5 h-5 md:h-6" />
          </button>
          <input 
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Yetkazib beruvchiga xabar yozing..."
            className="flex-1 bg-transparent border-none  outline-none text-[15px] py-2"
          />
          <button 
            onClick={handleSend}
            className="bg-[#F47B25] p-3 rounded-xl text-white shadow-md active:scale-95 transition-all"
          >
            <Send className="w-5 h-5 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;