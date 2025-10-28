import type { buttonStyles } from "./styles"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import type { VariantProps } from "class-variance-authority"

type ButtonVariant = "default" | "primary" | "ghost" | "outline"

type ButtonSize =
  | "small"
  | "medium"
  | "large"
  | "basic"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
  children?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

export type ButtonRef = HTMLButtonElement