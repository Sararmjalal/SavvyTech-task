/* eslint-disable */
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { textFieldInputStyles } from "./styles"
import type { TextFieldInputProps } from "./types"

export const TextFieldInput = forwardRef<HTMLInputElement, TextFieldInputProps>(({ size = "medium", pattern, className, ...props }, ref) => {

  const inputClasses = cn(
    textFieldInputStyles({ size }),
    className,
  )

  return (
    <input
      ref={ref}
      className={inputClasses}
      {...props}
    />
  )
})

TextFieldInput.displayName = "TextFieldInput"