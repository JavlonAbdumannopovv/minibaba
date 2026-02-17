"use client";

import { useFormContext, Controller } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InputField } from "@/components/fields/input-field";
import { SelectField } from "@/components/fields/select-field";
import { TextareaField } from "@/components/fields/textarea-field";
import { CheckoutValues } from "@/types/checkout.type";

export function CheckoutShippingAddress() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<CheckoutValues>();

  const shippingErrors = errors.shipping as FieldErrors<CheckoutValues["shipping"]> | undefined;

  const countryOptions = ["Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan"];

  return (
    <Card className="border-border bg-surface rounded-xl border shadow-sm">
      <CardHeader className="p-6 pb-0">
        <div className="mb-6 flex items-center gap-3">
          <span className="bg-primary text-text-inverse flex h-8 w-8 items-center justify-center rounded-full font-bold">
            1
          </span>
          <h2 className="text-xl font-bold">Yetkazib berish manzili</h2>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Full name */}
          <div className="col-span-2 md:col-span-1">
            <InputField
              label="Qabul qiluvchi ismi"
              placeholder="Masalan: Azizbek Aliyev"
              registration={register("shipping.fullName")}
              error={shippingErrors?.fullName}
            />
          </div>

          {/* Phone */}
          <div className="col-span-2 md:col-span-1">
            <InputField
              label="Telefon raqami"
              type="tel"
              placeholder="+998"
              registration={register("shipping.phone")}
              error={shippingErrors?.phone}
            />
          </div>

          {/* Country (select) */}
          <div className="col-span-2 md:col-span-1">
            <Controller
              control={control}
              name="shipping.country"
              render={({ field }) => (
                <SelectField
                  label="Davlat"
                  options={countryOptions}
                  value={field.value}
                  onChange={field.onChange}
                  error={shippingErrors?.country}
                />
              )}
            />
          </div>

          {/* Province (text) */}
          <div className="col-span-2 md:col-span-1">
            <InputField
              label="Province"
              placeholder="Masalan: Tashkent"
              registration={register("shipping.province")}
              error={shippingErrors?.province}
            />
          </div>

          {/* City (text) */}
          <div className="col-span-2 md:col-span-1">
            <InputField
              label="City"
              placeholder="Masalan: Tashkent"
              registration={register("shipping.city")}
              error={shippingErrors?.city}
            />
          </div>

          {/* Zip code (text) */}
          <div className="col-span-2 md:col-span-1">
            <InputField
              label="ZIP code"
              placeholder="Masalan: 100000"
              registration={register("shipping.zip")}
              error={shippingErrors?.zip}
            />
          </div>

          {/* Address (textarea) */}
          <div className="col-span-2">
            <Controller
              control={control}
              name="shipping.address"
              render={({ field }) => (
                <TextareaField
                  label="Address"
                  placeholder="Masalan: Amir Temur ko'chasi, 12-uy. Mo'ljal..."
                  value={field.value}
                  onChange={field.onChange}
                  error={shippingErrors?.address}
                />
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
