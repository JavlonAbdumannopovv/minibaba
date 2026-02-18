import React from 'react'
import TitleRFQ from './_components/rfqTitle'
import RfqForm from './_components/rfqForm'
import { Lightbulb } from 'lucide-react'



const page = () => {
    return (
        <div>
            <div className='md:flex gap-[32px]'>
                <div className='py-[32px] flex-1 flex flex-col items-start  justify-start gap-[16px]'>
                    <TitleRFQ />
                    <RfqForm />
                </div>

                <div className='max-w-[320px] flex flex-col gap-[24px] pt-[32px] pr-0'>

                    <div className="w-[320px] max-w-[320px] h-[185px] mx-auto border border-[#F47B2533] p-[24px]  bg-[#F47B251A] rounded-[12px] flex flex-col gap-[15px] ">
                        <div className='font-sans font-bold text-[#F47B25] flex gap-[12px]'>
                            <Lightbulb className='' />
                            <div className=' text-[18px]'>Foydali maslahat</div>
                        </div>

                        <div className='text-[14px] font-medium font-sans text-[#374151]'>
                            Batafsil ma'lumot berilgan so'rovlar 50%
                            ko'proq taklif oladi. Mahsulot o'lchamlari,
                            materiali va sertifikat talablarini
                            ko'rsatishni unutmang.
                        </div>
                    </div>


                    <div className='h-[226px]  bg-[#FFFFFF] flex flex-col rounded-[12px] w-full border border-[#E5E7EB] p-[24px] gap-[16px]'>
                        <div className='font-bold text-[#111827] text-[16px]'>Jarayon qanday ishlaydi?</div>

                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex gap-[12px] justify-start items-center'>
                                <div className='w-[24px] rounded-full h-[24px] flex justify-center items-center bg-[#F3F4F6] font-bold text-[#F47B25] text-[14px]'>
                                    1
                                </div>
                                <div className='text-[14px] text-[#4B5563] font-normal'>
                                    So'rovnomani to'ldiring va yuboring.
                                </div>
                            </div>
                            <div className='flex gap-[12px] justify-start items-center'>
                                <div className='w-[24px] rounded-full h-[24px] flex justify-center items-center bg-[#F3F4F6] font-bold text-[#F47B25] text-[14px]'>
                                    2
                                </div>
                                <div className='text-[14px] text-[#4B5563] font-normal'>
                                    Yetkazib beruvchilar sizga o'z
                                    narxlarini taklif qilishadi.
                                </div>
                            </div>
                            <div className='flex gap-[12px] justify-start items-center'>
                                <div className='w-[24px] rounded-full h-[24px] flex justify-center items-center bg-[#F3F4F6] font-bold text-[#F47B25] text-[14px]'>
                                    3
                                </div>
                                <div className='text-[14px] text-[#4B5563] font-normal'>
                                    Eng yaxshi taklifni tanlang va
                                    shartnoma tuzing.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), transparent), url('/logbase.png')`
                        }}
                        className='w-full h-[192px] bg-cover bg-center bg-no-repeat rounded-[12px] flex flex-col justify-end p-[16px]'
                    >
                        <div className='text-[#FFFFFF] text-[14px] font-bold'>Logistika xizmati</div>
                        <div className='text-[#FFFFFFB2] font-normal text-[12px]'>Minibaba orqali yuklarni sug'urtalash</div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default page