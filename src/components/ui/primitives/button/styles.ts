import { cva } from "class-variance-authority"

export const buttonStyles = cva(
  "transition-all cursor-pointer disabled:cursor-not-allowed disabled:text-gray-500",
  {
    variants: {
      variant: {
        default: "",
        primary: "text-white bg-primary border-[1px] border-primary disabled:border-gray-200 rounded-sm hover:bg-primary-600 focus:outline-2 focus:outline-primary-100  disabled:bg-gray-200",
        ghost: "bg-transparent border-none text-primary",
        outline: "border-[1px] border-primary rounded-sm text-primary",
      },
      size: {
        basic: "",
        small: "px-3 py-1.5 text-xs font-normal",
        medium: "px-4 py-2 text-sm font-semibold",
        large: "px-5 py-3 text-base font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "large",
    },
  },
)
