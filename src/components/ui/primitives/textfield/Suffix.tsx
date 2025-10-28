import Box from "../box"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { textFieldSuffixStyles } from "./styles"

interface TextFieldSuffixProps {
  size?: "small" | "medium" | "large"
  variant?: "default" | "error" | "info"
  children: React.ReactNode
  className?: string
}

export const TextFieldSuffix = forwardRef<HTMLDivElement, TextFieldSuffixProps>(({ size = "medium", variant = "default", children, className, ...props }, ref) => {

  const suffixClasses = cn(textFieldSuffixStyles({ size, variant }), className)

  return (
    <Box component="div" ref={ref} className={suffixClasses} {...props}>
      {children}
    </Box>
  )
},
)

TextFieldSuffix.displayName = "TextFieldSuffix"