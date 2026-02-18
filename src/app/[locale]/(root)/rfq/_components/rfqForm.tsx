"use client";
import { Send } from "lucide-react"; 
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTranslations } from "next-intl";
import { RfqValidation } from "@/validations/rfq.validation";
import { InputField } from "./inputField";


type RfqValues = z.infer<typeof RfqValidation.rfqSchema>;

const RfqForm = () => {
  const t = useTranslations("RFQ");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RfqValues>({
    resolver: zodResolver(RfqValidation.rfqSchema),
    defaultValues: { productName: "", quantity: 0, unit: "Dona", city: "", comment: "" },
  });

  const onSubmit = async (values: RfqValues) => {
    console.log("Yuborilgan ma'lumotlar:", values);
  };

  return (
    <div className="bg-white  w-full  rounded-xl p-8 shadow-sm border border-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputField
          label="Mahsulot nomi"
          placeholder="Masalan: Paxta matosi yoki Qurilish armaturasi"
          registration={register("productName")}
          error={errors.productName}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Miqdor"
            type="number"
            registration={register("quantity", { valueAsNumber: true })}
            error={errors.quantity}
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">O'lchov birligi</label>
            <select 
              {...register("unit")}
              className="h-12 focus:border-primary focus:ring-primary/20 focus:ring-1 w-full rounded-lg border border-gray-300 px-4  focus:outline-none bg-white"
            >
              <option value="Dona">Dona</option>
              <option value="Kg">Kg</option>
              <option value="Metr">Metr</option>
            </select>
          </div>
        </div>


        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Yetkazib berish shahri</label>
          <select 
            {...register("city")}
            className="h-12 w-auto rounded-lg border border-gray-300 px-4 text-gray-500 focus:outline-none focus:border-primary focus:ring-primary/20 focus:ring-1"
          >
            <option value="">Shaharni tanlang</option>
            <option value="tashkent">Toshkent</option>
            <option value="samarkand">Samarqand</option>
          </select>
          {errors.city && <span className="text-red-500 text-xs">{errors.city.message}</span>}
        </div>


        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Izoh (Qo'shimcha ma'lumotlar)</label>
          <textarea
            {...register("comment")}
            placeholder="Maxsulot sifati, rangi va yetkazib berish muddatlari haqida batafsil ma'lumot yozing..."
            className="min-h-[120px] w-full rounded-lg border border-gray-300 p-4 focus:border-primary focus:ring-primary/20 focus:ring-1 focus:outline-none"
          />
        </div>

        
        <button
          className="bg-[#f58220] hover:bg-[#e0751b] text-white flex h-14 w-full items-center justify-center rounded-lg text-lg font-bold transition-all shadow-md gap-2"
          type="submit"
          disabled={isSubmitting}
        >
          <Send className="w-5 h-5" />
          {isSubmitting ? "Yuborilmoqda..." : "RFQ yuborish"}
        </button>

      </form>
    </div>
  );
};

export default RfqForm;