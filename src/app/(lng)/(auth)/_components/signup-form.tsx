"use client";

import { AuthValidation } from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { InputField } from "./input-field";
import z from "zod";

type SignUpValues = z.infer<typeof AuthValidation.signUpSchema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpValues>({
    resolver: zodResolver(AuthValidation.signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (values: SignUpValues) => {
    // TODO: backendga yuboramiz
    console.log(values);
  };

  return (
    <div className="dark:bg-background-dark/50 border-border bg-surface mx-auto w-full max-w-[440] rounded-xl border p-8 shadow-xl sm:p-10">
      {/* <!-- Welcome header --> */}

      <div className="mb-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-primary/10 rounded-full p-3">
            <Lock className="text-primary" />
          </div>
        </div>
        <h1 className="text-text mb-2 text-3xl font-extrabold tracking-tight">Xush kelibsiz!</h1>
        <p className="text-text-muted text-base">Ro'xatdan o'tish va xaridni davom ettirish</p>
        <div className="text-primary mt-2 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase">
          <span className="bg-primary h-2 w-2 animate-pulse rounded-full"></span>
          Email orqali ro'yxatdan o'tish
        </div>
      </div>

      {/* <!-- Form --> */}
      {errors.root?.message ? (
        <div className="border-error bg-error/10 text-error rounded-lg border p-3 text-sm font-medium">
          {errors.root.message}
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <InputField
          label="Email manzilingiz"
          type="email"
          placeholder="your@example.com"
          registration={register("email")}
          error={errors.email}
        />

        <InputField
          label="Parolni kiriting"
          type="password"
          placeholder="********"
          registration={register("password")}
          error={errors.password}
        />
        <InputField
          label="Parolni tasdiqlang"
          type="password"
          placeholder="********"
          registration={register("confirmPassword")}
          error={errors.confirmPassword}
        />

        <div className="space-y-4 pt-2">
          <button
            className="bg-primary shadow-primary/20 hover:bg-primary/80 flex h-14 w-full cursor-pointer items-center justify-center rounded-lg text-lg font-bold text-white shadow-lg transition-colors"
            type="submit"
          >
            Ro'yxatdan o'tish
          </button>

          <div className="relative flex items-center py-2">
            <div className="border-border w-full border-t"></div>
            <span className="text-text-muted mx-4 flex text-sm font-medium">yoki</span>
            <div className="border-border w-full border-t"></div>
          </div>

          <Link href="/login">
            <button
              className="border-primary text-primary hover:bg-primary/5 flex h-14 w-full cursor-pointer items-center justify-center rounded-lg border-2 text-lg font-bold transition-colors"
              type="button"
            >
              Kirish
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
