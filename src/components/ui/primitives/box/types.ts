import type { VariantProps } from "class-variance-authority"
import type { HTMLAttributes, ReactNode } from "react"
import type { boxStyles } from "./styles"

export interface BoxProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof boxStyles> {
  children?: ReactNode
  component?: "div" | "main" | "section" | "ul" | "td"
  variant?: "basic"
}

export type BoxRef = HTMLElement 