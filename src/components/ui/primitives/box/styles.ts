import { cva } from "class-variance-authority"

export const boxStyles = cva("", {
  variants: {
    variant: {
      "basic": "",
    },
  },
  defaultVariants: {
    variant: "basic",
  },
})