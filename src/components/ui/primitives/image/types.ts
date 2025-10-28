import type { ImgHTMLAttributes } from "react"

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad" | "onError"> {
  src: string
  alt: string
  width?: number
  height?: number
  quality?: number
  enableWebP?: boolean
  fallbackSrc?: string
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void
}

export type ImageRef = HTMLImageElement