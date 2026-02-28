"use client";

import React, { useState } from 'react';
import Head from 'next/head';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('payme');

  return (
    <div className="bg-[#F8FAFC] dark:bg-zinc-950 text-slate-900 dark:text-slate-100 font-sans min-h-screen">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />


      <main className="max-w-7xl mx-auto px-4 ">
        <div className="grid grid-cols-1  gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-8">
 
            <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-orange-500/5">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="material-icons text-orange-500">location_on</span>
                  <h2 className="text-lg font-bold">Yetkazib berish manzili</h2>
                </div>
                <button className="text-orange-500 text-sm font-semibold hover:underline">O'zgartirish</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border-2 border-orange-500 bg-orange-500/5 relative">
                  <div className="absolute top-4 right-4 text-orange-500">
                    <span className="material-icons text-sm">check_circle</span>
                  </div>
                  <p className="font-bold mb-1">Anvar Toshpo'latov</p>
                  <p className="text-sm text-slate-500 dark:text-zinc-400 mb-3">+998 90 123 45 67</p>
                  <p className="text-sm leading-relaxed">Toshkent shahri, Yunusobod tumani, 14-mavze, 23-uy, 45-xonadon</p>
                  <div className="mt-4 flex gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-orange-500/10 text-orange-500 rounded">Asosiy</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-500 rounded">Uy</span>
                  </div>
                </div>
                <button className="border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-lg p-4 flex flex-col items-center justify-center gap-2 group hover:border-orange-500/50 transition-colors">
                  <span className="material-icons text-slate-400 group-hover:text-orange-500">add_location</span>
                  <span className="text-sm font-medium text-slate-500 group-hover:text-orange-500">Yangi manzil qo'shish</span>
                </button>
              </div>
            </section>

            <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-orange-500/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-icons text-orange-500">account_balance_wallet</span>
                <h2 className="text-lg font-bold">To‘lov usulini tanlang</h2>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Milliy to'lov tizimlari</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['payme', 'click', 'uzcard'].map((method) => (
                    <div key={method} className="relative">
                      <input 
                        type="radio" 
                        name="payment" 
                        id={method} 
                        className="hidden peer" 
                        checked={paymentMethod === method}
                        onChange={() => setPaymentMethod(method)}
                      />
                      <label htmlFor={method} className="flex flex-col items-center justify-center p-4 border-2 border-slate-100 dark:border-zinc-800 rounded-lg cursor-pointer transition-all peer-checked:border-orange-500 peer-checked:bg-orange-50/30 dark:peer-checked:bg-orange-500/5 h-24">
                        <div className={`absolute top-2 right-2 ${paymentMethod === method ? 'block' : 'hidden'}`}>
                          <span className="material-icons text-orange-500 text-sm">check_circle</span>
                        </div>
                        <span className="text-xs font-bold capitalize">{method}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-zinc-800 space-y-4 max-w-lg">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Karta raqami</label>
                  <input className="w-full p-2.5 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" placeholder="0000 0000 0000 0000" type="text"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">Muddati</label>
                    <input className="w-full p-2.5 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" placeholder="OO / YY" type="text"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">CVV</label>
                    <input className="w-full p-2.5 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500" placeholder="***" type="password"/>
                  </div>
                </div>
              </div>
            </section>


            <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-orange-500/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-icons text-orange-500">shopping_bag</span>
                <h2 className="text-lg font-bold">Buyurtma tarkibi</h2>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Smart Watch Series 7", price: "4,250,000", desc: "Soni: 1 • Rangi: Qora" },
                  { name: "Wireless Headphones", price: "1,150,000", desc: "Soni: 2 • Rangi: Oq" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-4 border-b border-slate-100 dark:border-zinc-800 last:border-0 last:pb-0">
                    <div className="w-20 h-20 bg-slate-100 dark:bg-zinc-800 rounded-lg shrink-0"></div>
                    <div className="grow">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                      <p className="font-bold text-orange-500 mt-2">{item.price} so'm</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-orange-500/5 overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-bold mb-6">Buyurtma tafsiloti</h2>
                <div className="space-y-4 mb-6 text-sm">
                  <div className="flex justify-between text-slate-500">
                    <span>Oraliq jami (3 ta tovar)</span>
                    <span>6,550,000 so'm</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Yetkazib berish</span>
                    <span className="text-green-500 font-medium">Bepul</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Chegirma</span>
                    <span className="text-red-500">- 50,000 so'm</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mb-6">
                  <input className="grow p-2 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg text-sm" placeholder="Promo-kod" />
                  <button className="bg-slate-900 dark:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-bold">Qo'llash</button>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-zinc-800">
                  <div className="flex justify-between items-end mb-8">
                    <span className="font-bold text-lg">Umumiy to'lov:</span>
                    <div className="text-right">
                      <p className="text-2xl font-black text-slate-900 dark:text-white">6,500,000 so'm</p>
                      <p className="text-[10px] text-slate-400 uppercase">Barcha soliqlar kiritilgan</p>
                    </div>
                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 group">
                    To‘lovni tasdiqlash
                    <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>


            <div className="bg-orange-500/5 rounded-xl p-4 border border-orange-500/10 flex items-start gap-3">
              <span className="material-icons text-orange-500">headset_mic</span>
              <div>
                <p className="text-xs font-bold text-orange-500 mb-1">Yordam kerakmi?</p>
                <p className="text-sm font-bold">+998 71 200 00 00</p>
              </div>
            </div>
          </div>

        </div>
      </main>


    </div>
  );
};

export default CheckoutPage;