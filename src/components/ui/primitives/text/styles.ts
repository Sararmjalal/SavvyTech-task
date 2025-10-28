import { cva } from "class-variance-authority"

export const textStyles = cva("", {
  variants: {
    variations: {
      "display-1": "leading-[1.4em] font-semibold text-5xl",
      "display-2": "leading-[1.4em] font-semibold text-[40px]",
      "h1": "leading-[1.4em] font-bold text-2xl",
      "h2": "leading-[1.4em] font-bold text-[22px]",
      "h3": "leading-[1.4em] font-bold text-xl",
      "h4": "leading-[1.4em] font-bold text-lg",
      "h5": "leading-[1.4em] font-bold text-base",
      "h6": "leading-[1.4em] font-bold text-sm",
      "body-large": "leading-[1.6em] font-semibold text-lg",
      "body-medium": "leading-[1.6em] font-semibold text-base",
      "body-small": "leading-[1.6em] font-semibold text-sm",
      "label-small": "leading-[1.5em] font-normal text-xs",
      "label-xsmall": "leading-[1.5em] font-normal text-[10px]",
    },
  },
})
