"use client";

import { AuthValidation } from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { useForm } from "react-hook-form";
import { InputField } from "./input-field";
import z from "zod";

type SignUpValues = z.infer<typeof AuthValidation.signUpSchema>;

const SignUpForm = () => {
  const t = useTranslations("Auth");

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
    console.log(values);
  };

  return (
    <div className="dark:bg-background-dark/50 border-border bg-surface mx-auto w-full max-w-[440] rounded-xl border p-8 shadow-xl sm:p-10">
      <div className="mb-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-primary/10 rounded-full p-3">
            <Lock className="text-primary" />
          </div>
        </div>

        <h1 className="text-text mb-2 text-3xl font-extrabold tracking-tight">{t("welcome")}</h1>

        <p className="text-text-muted text-base">{t("signup_hint")}</p>
      </div>

      {errors.root?.message ? (
        <div className="border-error bg-error/10 text-error rounded-lg border p-3 text-sm font-medium">
          {errors.root.message}
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <InputField
          label={t("emailLabel")}
          type="email"
          placeholder={t("emailPlaceholder")}
          registration={register("email")}
          error={errors.email}
        />

        <InputField
          label={t("passwordLabel")}
          type="password"
          placeholder={t("passwordPlaceholder")}
          registration={register("password")}
          error={errors.password}
        />

        <InputField
          label={t("confirmPasswordLabel")}
          type="password"
          placeholder={t("passwordPlaceholder")}
          registration={register("confirmPassword")}
          error={errors.confirmPassword}
        />

        <div className="space-y-4 pt-2">
          <button
            className="bg-primary shadow-primary/20 hover:bg-primary/80 flex h-14 w-full cursor-pointer items-center justify-center rounded-lg text-lg font-bold text-white shadow-lg transition-colors disabled:opacity-60"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("submitting") : t("signup")}
          </button>

          <div className="relative flex items-center py-2">
            <div className="border-border w-full border-t"></div>
            <span className="text-text-muted mx-4 flex text-sm font-medium">{t("or")}</span>
            <div className="border-border w-full border-t"></div>
          </div>

          <Link href="/login">
            <button
              className="border-primary text-primary hover:bg-primary/5 flex h-14 w-full cursor-pointer items-center justify-center rounded-lg border-2 text-lg font-bold transition-colors"
              type="button"
            >
              {t("login")}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
