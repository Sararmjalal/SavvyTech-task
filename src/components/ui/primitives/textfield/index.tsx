import Box from "../box"
import { cn } from "@/lib/utils"
import { TextFieldLabel } from "./Label"
import { TextFieldInput } from "./Input"
import { TextFieldPrefix } from "./Prefix"
import { TextFieldSuffix } from "./Suffix"
import { TextFieldHelper } from "./Helper"
import { TextFieldWrapper } from "./Wrapper"
import { forwardRef, useState, useCallback } from "react"
import type { TextFieldRef, TextFieldProps } from "./types"

const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  ({
    variant = "default",
    size = "medium",
    prefix,
    suffix,
    suffixIcon,
    label,
    error,
    disabled = false,
    className,
    id,
    dir,
    ...props
  }, ref) => {

    const [_focused, setFocused] = useState(false)

    const actualVariant = !!error ? "error" : variant

    const fieldId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`

    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false)
      props.onBlur?.(e)
    }, [props])

    const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true)
      props.onFocus?.(e)
    }, [props])

    const containerClasses = cn(
      "w-full",
      className,
    )

    return (
      <Box component="div" className={containerClasses}>
        {label && (
          <TextFieldLabel
            variant={actualVariant}
            size={size}
            htmlFor={fieldId}
          >
            {label}
          </TextFieldLabel>
        )}

        <TextFieldWrapper
          dir={dir}
          variant={actualVariant}
          size={size}
          disabled={disabled}
        >
          {prefix && (
            <TextFieldPrefix size={size} variant={actualVariant}>
              {prefix}
            </TextFieldPrefix>
          )}

          <TextFieldInput
            ref={ref}
            id={fieldId}
            size={size}
            disabled={disabled}
            onChange={props.onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-invalid={!!error}
            aria-describedby={error ? `${fieldId}-helper` : undefined}
            {...props}
          />

          {(suffix || suffixIcon) && (
            <TextFieldSuffix size={size} variant={actualVariant}>
              {suffixIcon || suffix}
            </TextFieldSuffix>
          )}
        </TextFieldWrapper>
        <TextFieldHelper
          variant={actualVariant}
          id={`${fieldId}-helper`}
        >
          {error}
        </TextFieldHelper>
      </Box>
    )
  },
)

TextField.displayName = "TextField"

export default TextField