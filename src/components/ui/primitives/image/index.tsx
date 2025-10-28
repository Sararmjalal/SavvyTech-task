import { cn } from "@/lib/utils"
import type { ImageProps, ImageRef } from "./types"
import { forwardRef, useState, useCallback, useRef } from "react"

const Image = forwardRef<ImageRef, ImageProps>((props, ref) => {
  const {
    src,
    alt,
    fallbackSrc = "/assets/images/placeholder.svg",
    className,
    onError,
    onLoad,
    width,
    height,
    style = {},
    ...restProps
  } = props

  const [imgSrc, setImgSrc] = useState(src)
  const [hasErrored, setHasErrored] = useState(false)
  const lastSrcRef = useRef(src)

  if (lastSrcRef.current !== src) {
    lastSrcRef.current = src
    setImgSrc(src)
    setHasErrored(false)
  }

  const handleError = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    if (!hasErrored && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasErrored(true)
      setImgSrc(fallbackSrc)
    }
    onError?.(event)
  }, [hasErrored, fallbackSrc, imgSrc, onError])

  const handleLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    onLoad?.(event)
  }, [onLoad])

  const thisWidth = typeof (width) === "number" ? `${width}px` : width
  const thisHeight = typeof (height) === "number" ? `${height}px` : height

  return (
    <img
      ref={ref}
      src={imgSrc}
      alt={alt}
      style={{
        ...style,
        width: thisWidth,
        height: thisHeight,
      }}
      className={cn("max-w-full h-auto", className)}
      onError={handleError}
      onLoad={handleLoad}
      {...restProps}
    />
  )
})

Image.displayName = "Image"

export default Image