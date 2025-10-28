import type { textStyles } from "./styles"
import type { HTMLAttributes, ReactNode } from "react"
import type { VariantProps } from "class-variance-authority"

type TextVariant =
  | "display-1"
  | "display-2"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body-large"
  | "body-medium"
  | "body-small"
  | "label-small"
  | "label-xsmall"

type TextComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label" | "span" | "div"
type TextElementType = HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement | HTMLLabelElement | HTMLSpanElement

export interface TextProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof textStyles> {
  children?: ReactNode
  component?: TextComponent
  variant?: TextVariant
}

export type TextRef = TextElementType