import { z } from "zod";

export const CheckoutValidation = {
  schema: z.object({
    shipping: z.object({
      fullName: z.string().trim().min(1, "Ism majburiy"),
      phone: z
        .string()
        .trim()
        .min(7, "Telefon majburiy")
        .regex(/^\+?\d[\d ]+$/, "Telefon noto'g'ri formatda"),

      country: z.string().trim().min(1, "Davlatni tanlang"),
      province: z.string().trim().min(1, "Province majburiy"),
      city: z.string().trim().min(1, "City majburiy"),
      zip: z.string().trim().min(1, "ZIP code majburiy"),
      address: z.string().trim().min(1, "Address majburiy"),
    }),

    delivery: z.object({
      type: z.enum(["courier", "pickup"], { message: "Yetkazib berish turini tanlang" }),
    }),

    payment: z.object({
      method: z.enum(["payme", "click", "uzcard-humo"], { message: "To'lov usulini tanlang" }),
    }),
  }),
};
