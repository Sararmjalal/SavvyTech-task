import { cn } from "@/lib/utils"
import { textStyles } from "./styles"
import { createElement, forwardRef } from "react"
import type { TextProps, TextRef } from "./types"

const Text = forwardRef<TextRef, TextProps>(({ variant = "body-small", component = "p", className, children, ...props }, ref) => {

  const classNames = cn(
    textStyles({ variations: variant }),
    className,
  )

  return createElement(component, {
    className: classNames,
    ref,
    ...props,
  }, children)
},
)

Text.displayName = "Text"

export default Text