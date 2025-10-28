import { cva } from "class-variance-authority"

export const textFieldStyles = cva(
  "relative flex items-center w-full rounded-sm border transition-all duration-200 outline-none focus-within:ring-2 focus-within:ring-opacity-50 bg-white",
  {
    variants: {
      variant: {
        default: "border-gray-400 focus-within:border-info focus-within:ring-info-100",
        error: "border-error focus-within:border-error focus-within:ring-error-100 px-6",
        info: "border-info focus-within:border-info focus-within:ring-info-100",
      },
      size: {
        small: "h-8 text-sm",
        medium: "h-14 text-base",
        large: "h-14 text-lg",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        className: "bg-white hover:border-gray-400",
      },
      {
        variant: "error",
        className: " hover:border-error text-error-300",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "large",
    },
  },
)

export const textFieldDisabledStyles = cva(
  "opacity-50 cursor-not-allowed bg-gray-100 border-gray-200 hover:border-gray-200 focus-within:border-gray-200 focus-within:ring-0",
)

export const textFieldInputStyles = cva(
  "w-full bg-transparent border-0 outline-none placeholder:text-gray-500 disabled:cursor-not-allowed ",
  {
    variants: {
      size: {
        small: "p-2 text-sm",
        medium: "p-3 text-base font-semibold",
        large: "p-4 text-lg",
      },
    },

    defaultVariants: {
      size: "medium",
    },
  },
)

export const textFieldPrefixStyles = cva(
  "absolute left-0 top-0 h-full flex items-center justify-center text-gray-500 pointer-events-none z-10",
  {
    variants: {
      size: {
        small: "w-8 text-xs",
        medium: "w-10 text-sm",
        large: "w-12 text-base",
      },
      variant: {
        default: "text-gray-500",
        error: "text-error",
        info: "text-info",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "default",
    },
  },
)

export const textFieldSuffixStyles = cva(
  "absolute right-0 top-0 h-full flex items-center justify-center text-gray-500 pointer-events-none z-10",
  {
    variants: {
      size: {
        small: "px-2 text-xs min-w-[3rem]",
        medium: "px-3 text-sm min-w-[4rem]",
        large: "px-4 text-base min-w-[5rem]",
      },
      variant: {
        default: "text-gray-500",
        error: "text-error",
        info: "text-info",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "default",
    },
  },
)

export const textFieldLabelStyles = cva(
  "block text-gray-700 font-medium mb-1",
  {
    variants: {
      size: {
        small: "text-xs",
        medium: "text-sm",
        large: "text-base",
      },
      variant: {
        default: "text-gray-700",
        error: "text-error",
        info: "text-info",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "default",
    },
  },
)

export const textFieldHelperStyles = cva(
  "mt-1 text-xs",
  {
    variants: {
      variant: {
        default: "text-gray-600",
        error: "text-error",
        info: "text-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)