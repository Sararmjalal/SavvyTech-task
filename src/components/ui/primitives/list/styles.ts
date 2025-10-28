import { cva } from "class-variance-authority"

export const listStyles = cva("", {
  variants: {
    variant: {
      default: "list-none",
    },
  },
})

export const listItemStyles = cva("", {
  variants: {
    variant: {
      default: "",
    },
  },
})
