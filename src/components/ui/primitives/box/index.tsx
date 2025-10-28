import { cn } from "@/lib/utils"
import { boxStyles } from "./styles"
import type { BoxProps, BoxRef } from "./types"
import { createElement, forwardRef } from "react"

const Box = forwardRef<BoxRef, BoxProps>(({ variant = "basic", component = "div", className, children, ...props }, ref) => {

  const classNames = cn(boxStyles({ variant }), className)

  return createElement(component, {
    ref,
    ...props,
    className: classNames,
  }, children)
})

Box.displayName = "Box"

export default Box