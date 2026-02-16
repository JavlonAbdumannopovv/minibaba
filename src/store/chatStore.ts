import { initialChats } from '@/constants';
import { Chat, Seller } from '@/types';
import { create } from 'zustand';



interface ChatState {
    activeChatId: string | null;
    chats: Chat[];
    setChats: (chats: Chat[]) => void; 
    setActiveChat: (id: string | null) => void;
    sendMessage: (chatId: string, text: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
    activeChatId: null,
    chats: initialChats,
    setChats: (newChats) => set({ chats: newChats }),

    // Aktiv chatni belgilash
    setActiveChat: (id) => set({ activeChatId: id }),

    // Xabar yuborish mantiqi
    sendMessage: (chatId, text) => set((state) => ({
        chats: state.chats.map(chat =>
            chat.id === chatId
                ? {
                    ...chat,
                    messages: [
                        ...chat.messages, 
                        { 
                            id: Date.now().toString(), 
                            text, 
                            sender: 'me', 
                            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
                        }
                    ],
                    lastMessage: text,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
                : chat
        )
    })),
}));