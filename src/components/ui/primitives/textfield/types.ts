import type { textFieldStyles } from "./styles"
import type { VariantProps } from "class-variance-authority"
import type { InputHTMLAttributes, ReactNode, HTMLAttributes } from "react"

type TextFieldVariant = "default" | "error" | "info"
type TextFieldSize = "small" | "medium" | "large"

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">,
  VariantProps<typeof textFieldStyles> {
  variant?: TextFieldVariant
  size?: TextFieldSize
  prefix?: ReactNode
  suffix?: ReactNode
  suffixIcon?: ReactNode
  label?: string
  error?: string
  disabled?: boolean
  dir?: "rtl" | "ltr"
}

export interface TextFieldWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof textFieldStyles> {
  variant?: TextFieldVariant
  size?: TextFieldSize
  disabled?: boolean
}

export interface TextFieldInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: TextFieldSize
}

export interface TextFieldHelperProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TextFieldVariant
  children: ReactNode
}

export interface TextFieldLabelProps {
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "default" | "error" | "info";
}

export type TextFieldRef = HTMLInputElement