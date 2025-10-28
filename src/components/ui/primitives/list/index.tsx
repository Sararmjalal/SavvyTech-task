import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { listStyles } from "./styles"
import type { ListProps, ListRef } from "./types"
import Box from "../box"

const List = forwardRef<ListRef, ListProps>(({ variant = "default", className, children, ...props }, ref) => {

  const classNames = cn(listStyles({ variant }), className)

  return (
    <Box component="ul" ref={ref} className={classNames} {...props}>
      {children}
    </Box>
  )
})

List.displayName = "List"

export default List