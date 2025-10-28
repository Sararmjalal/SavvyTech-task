import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { listItemStyles } from "./styles"
import type { ListItemProps, ListItemRef } from "./types"

const ListItem = forwardRef<ListItemRef, ListItemProps>(({ variant = "default", className, children, ...props }, ref) => {

  const classNames = cn(listItemStyles({ variant }), className)

  return (
    <li
      ref={ref}
      className={classNames}
      {...props}
    >
      {children}
    </li>
  )
})

ListItem.displayName = "ListItem"

export default ListItem