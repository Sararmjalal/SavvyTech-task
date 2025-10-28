import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { textFieldDisabledStyles, textFieldStyles } from "./styles"
import Box from "../box"
import type { TextFieldWrapperProps } from "./types"

export const TextFieldWrapper = forwardRef<HTMLDivElement, TextFieldWrapperProps>(({ variant = "default", size = "medium", disabled, className, children, ...props }, ref) => {

  const wrapperClasses = cn(
    textFieldStyles({ variant, size }),
    disabled && textFieldDisabledStyles(),
    className,
  )

  return (
    <Box component="div" ref={ref} className={wrapperClasses} {...props}>
      {children}
    </Box>
  )
})

TextFieldWrapper.displayName = "TextFieldWrapper"