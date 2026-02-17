"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useChatStore } from "@/store/chatStore";
import { verifiedSellers } from "@/constants";
import { Send, Plus, Smile } from 'lucide-react';
import ChatSidebar from './_components/sidebar';

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

  
    return (
      <div className="flex-1 h-full flex items-center justify-center bg-gray-50 font-bold">
        <ChatSidebar />
        <div className='w-full h-full md:flex hidden justify-center items-center'>
            Suhbatni boshlash uchun chatni tanlang
        </div>
      </div>
    );


};

export default ChatWindow;