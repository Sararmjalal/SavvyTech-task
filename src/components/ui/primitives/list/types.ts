import type { HTMLAttributes } from "react"
import type { listItemStyles, listStyles } from "./styles"
import type { VariantProps } from "class-variance-authority"

export interface ListProps extends HTMLAttributes<HTMLUListElement>, VariantProps<typeof listStyles> {
  variant?: "default"
}

export type ListRef = HTMLUListElement

export interface ListItemProps extends HTMLAttributes<HTMLLIElement>, VariantProps<typeof listItemStyles> {
  variant?: "default"
}

export type ListItemRef = HTMLLIElement