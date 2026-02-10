import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type InputFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
};
