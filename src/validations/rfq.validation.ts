import z from "zod";


export const formRFQSchema = z.object({
    name: z
        .string()
        .min(3, "Bug title must be at least 5 characters."),
    amount: z
        .string()
        .min(1, "Miqdor kiritilishi shart")
        .regex(/^[1-9]\d*$/, "Faqat musbat butun son kiriting"),
    quantity: z
        .string()
        .min(1, "O'lchov birligini tanlang"),
    city: z
        .string()
        .min(1, "O'lchov birligini tanlang"),
    comment: z.string()

})