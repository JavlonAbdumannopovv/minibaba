import z from "zod";

export const AuthValidation = {
  loginSchema: z.object({
    email: z.string().trim().min(1, "Email majburiy").email("Email noto'g'ri"),
    password: z.string().min(8, "Parol kamida 8 ta belgidan iborat bo'lsin"),
  }),
  signUpSchema: z
    .object({
      email: z.string().trim().min(1, "Email majburiy").email("Email noto'g'ri"),
      password: z.string().min(8, "Parol kamida 8 ta belgidan iborat bo'lsin"),
      confirmPassword: z.string().min(1, "Parolni qayta kiriting"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Parollar mos emas",
      path: ["confirmPassword"],
    }),
  passwordRecovery: z.object({
    email: z.string().trim().min(1, "Email majburiy").email("Email noto'g'ri"),
  }),
};
