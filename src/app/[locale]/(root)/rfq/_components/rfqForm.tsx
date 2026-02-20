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
    <div className="w-full rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputField
          label={t("form.productNameLabel")}
          placeholder={t("form.productNamePlaceholder")}
          registration={register("productName")}
          error={errors.productName}
        />

        <div className="flex grid-cols-2 flex-col gap-4 md:grid">
          <InputField
            label={t("form.quantityLabel")}
            type="number"
            registration={register("quantity", { valueAsNumber: true })}
            error={errors.quantity}
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">{t("form.unitLabel")}</label>
            <select
              {...register("unit")}
              className="focus:border-primary focus:ring-primary/20 h-12 w-full rounded-lg border border-gray-300 bg-white px-4 focus:ring-1 focus:outline-none"
            >
              <option value="Dona">Dona</option>
              <option value="Kg">Kg</option>
              <option value="Metr">Metr</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">{t("form.cityLabel")}</label>
          <select
            {...register("city")}
            className="focus:border-primary focus:ring-primary/20 h-12 w-auto rounded-lg border border-gray-300 px-4 text-gray-500 focus:ring-1 focus:outline-none"
          >
            <option value="">{t("form.cityPlaceholder")}</option>
            <option value="tashkent">Andijon</option>
            <option value="samarkand">Toshkent</option>
          </select>
          {errors.city && <span className="text-xs text-red-500">{errors.city.message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">
            {t("form.descriptionLabel")}
          </label>
          <textarea
            {...register("comment")}
            placeholder={t("form.descriptionPlaceholder")}
            className="focus:border-primary focus:ring-primary/20 min-h-[120px] w-full rounded-lg border border-gray-300 p-4 focus:ring-1 focus:outline-none"
          />
        </div>

        <button
          className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#f58220] text-lg font-bold text-white shadow-md transition-all hover:bg-[#e0751b]"
          type="submit"
          disabled={isSubmitting}
        >
          <Send className="h-5 w-5" />
          {isSubmitting ? t("form.submitting") : t("form.submit")}
        </button>
      </form>
    </div>
  );
};

export default RfqForm;
