import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { buttonStyles } from "./styles"
import type { ButtonProps, ButtonRef } from "./types"

const Button = forwardRef<ButtonRef, ButtonProps>(({ variant = "default", size = "basic", className, children, ...props }, ref) => {

  const classNames = cn(
    buttonStyles({ variant, size }),
    className,
  )

  return (
    <button
      className={classNames}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button