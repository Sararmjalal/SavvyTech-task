import Box from "../box"
import Text from "../text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { textFieldHelperStyles } from "./styles"
import type { TextFieldHelperProps } from "./types"

export const TextFieldHelper = forwardRef<HTMLDivElement, TextFieldHelperProps>(({ variant = "default", children, className, ...props }, ref) => {

  const helperClasses = cn(textFieldHelperStyles({ variant }), className)

  if (children) return (
    <Box component="div" ref={ref} className={helperClasses} {...props}>
      <Text variant="body-small" className="text-xs">
        {children}
      </Text>
    </Box>
  )
})

TextFieldHelper.displayName = "TextFieldHelper"