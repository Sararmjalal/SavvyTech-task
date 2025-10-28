import { cva } from "class-variance-authority"

export const imageStyles = cva(
  "max-w-full h-auto",
  {
    variants: {
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      rounded: "none",
    },
  },
)