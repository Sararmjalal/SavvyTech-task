import Box from "../box"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { textFieldPrefixStyles } from "./styles"

interface TextFieldPrefixProps {
  size?: "small" | "medium" | "large"
  variant?: "default" | "error" | "info"
  children: React.ReactNode
  className?: string
}

export const TextFieldPrefix = forwardRef<HTMLDivElement, TextFieldPrefixProps>(({ size = "medium", variant = "default", children, className, ...props }, ref) => {

  const prefixClasses = cn(textFieldPrefixStyles({ size, variant }), className)

  return (
    <Box component="div" ref={ref} className={prefixClasses} {...props}>
      {children}
    </Box>
  )
},
)

TextFieldPrefix.displayName = "TextFieldPrefix"