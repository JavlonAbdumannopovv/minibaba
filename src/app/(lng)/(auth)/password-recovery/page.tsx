"use client";

import { AuthValidation } from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { InputField } from "../_components/input-field";

type PasswordRecoveryValues = z.infer<typeof AuthValidation.passwordRecovery>;

const PasswordRecovery = () => {
  const [isSend, setIsSend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordRecoveryValues>({
    resolver: zodResolver(AuthValidation.passwordRecovery),
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (values: PasswordRecoveryValues) => {
    console.log(values);
    setIsSend(true);
  };

  return (
    <div className="dark:bg-background-dark/50 border-border bg-surface mx-auto w-full max-w-[440] rounded-xl border p-8 shadow-xl sm:p-10">
      {/* Parol tiklash sarlavhasi */}
      <div className="mb-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-primary/10 rounded-full p-3">
            <Lock className="text-primary" />
          </div>
        </div>
        <h1 className="text-text mb-2 text-3xl font-extrabold tracking-tight">Parolni tiklash</h1>
        {!isSend && <p className="text-text-muted text-base">Email manzilingizni kiriting</p>}
      </div>
      {/* Parol tiklash formasi */}
      {isSend ? (
        <div>
          <p className="text-text-muted mb-4 text-base">
            Elektron pochtangizga parol yuborildi. Shu parol orqali tizimga kirishingiz mumkin.
          </p>

          <Link href="/login">
            <button
              className="border-primary text-primary hover:bg-primary/5 flex h-14 w-full cursor-pointer items-center justify-center rounded-lg border-2 text-lg font-bold transition-colors"
              type="button"
            >
              Tizimga kirish
            </button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          <InputField
            label="Email manzilingiz"
            type="email"
            placeholder="your@example.com"
            registration={register("email")}
            error={errors.email}
          />
          <div className="space-y-4 pt-2">
            <button
              className="bg-primary shadow-primary/20 hover:bg-button-hover flex h-14 w-full cursor-pointer items-center justify-center rounded-lg text-lg font-bold text-white shadow-lg transition-colors"
              type="submit"
            >
              Yuborish
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PasswordRecovery;
