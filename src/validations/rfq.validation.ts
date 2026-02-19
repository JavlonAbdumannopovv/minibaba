import { z } from "zod";

export const RfqValidation = {
  rfqSchema: z.object({
    productName: z.string().min(3, "Mahsulot nomi kamida 3 ta harf bo'lsin"),
    quantity: z.number().min(1, "Miqdor 1 dan kam bo'lmasligi kerak"),
    unit: z.string().min(1, "O'lchov birligini tanlang"),
    city: z.string().min(1, "Shaharni tanlang"),
    comment: z.string().optional(),
  }),
};
