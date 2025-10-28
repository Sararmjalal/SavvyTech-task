import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { textFieldLabelStyles } from "./styles"
import type { TextFieldLabelProps } from "./types"

export const TextFieldLabel = forwardRef<HTMLLabelElement, TextFieldLabelProps>(({ variant = "default", size = "medium", children, className, ...props }, ref) => {

  const labelClasses = cn(textFieldLabelStyles({ variant, size }), className)

  return (
    <label ref={ref} className={labelClasses} {...props}>
      {children}
    </label>
  )
})

TextFieldLabel.displayName = "TextFieldLabel"