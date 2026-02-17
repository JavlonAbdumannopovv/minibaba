"use client";

import { Lock } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../../../../components/fields/input-field";
import { AuthValidation } from "@/validations/auth.validation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type LoginValues = z.infer<typeof AuthValidation.loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(AuthValidation.loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const t = useTranslations("Auth");

  const onSubmit = async (values: LoginValues) => {
    console.log(values);
  };

  return (
    <div className="dark:bg-background-dark/50 border-border bg-surface mx-auto w-full max-w-[440] rounded-xl border p-8 shadow-xl sm:p-10">
      <div className="mb-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-primary/10 rounded-full p-3">
            <Lock className="text-primary h-6 w-6" />
          </div>
        </div>

        <h1 className="text-text mb-2 text-3xl font-extrabold tracking-tight">{t("welcome")}</h1>

        <p className="text-text-muted text-base">{t("login_hint")}</p>
      </div>

      {errors.root?.message ? (
        <div className="border-error bg-error/10 text-error rounded-lg border p-3 text-sm font-medium">
          {errors.root.message}
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
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

        <Link href="/password-recovery" className="inline-block">
          <span className="text-primary text-sm transition-all hover:underline">
            {t("forgotPassword")}
          </span>
        </Link>

        <button
          className="bg-primary shadow-primary/20 hover:bg-primary/90 text-text-inverse flex h-14 w-full cursor-pointer items-center justify-center rounded-lg text-lg font-bold shadow-lg transition-colors disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("submitting") : t("login_submit")}
        </button>

        <div className="relative flex items-center py-2">
          <div className="border-border w-full border-t"></div>
          <span className="text-text-muted mx-4 flex text-sm font-medium">{t("or")}</span>
          <div className="border-border w-full border-t"></div>
        </div>

        <Link href="/signup">
          <button
            className="border-primary text-primary hover:bg-primary/5 flex h-14 w-full cursor-pointer items-center justify-center rounded-lg border-2 text-lg font-bold transition-colors"
            type="button"
          >
            {t("signup")}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
