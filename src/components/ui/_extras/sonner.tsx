"use client"
import type { ComponentProps } from "react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"
import { cn } from "@/lib/utils"

type ToasterProps = ComponentProps<typeof Sonner>

function isValidTheme(value: unknown): value is NonNullable<ToasterProps["theme"]> {
  return value === "light" || value === "dark" || value === "system"
}

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  const safeTheme: NonNullable<ToasterProps["theme"]> = isValidTheme(theme)
    ? theme
    : "system"

  const {
    className: incomingClassName,
    toastOptions: incomingToastOptions,
    ...restProps
  } = props

  const baseClassName = "toaster group"

  const baseClassNames = {
    toast:
      "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
    description: "group-[.toast]:text-muted-foreground",
    actionButton:
      "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
    cancelButton:
      "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
  } as const

  const incomingClassNames = incomingToastOptions?.classNames ?? {}

  const mergedClassNames = {
    ...incomingClassNames,
    toast: cn(baseClassNames.toast, incomingClassNames.toast),
    description: cn(baseClassNames.description, incomingClassNames.description),
    actionButton: cn(baseClassNames.actionButton, incomingClassNames.actionButton),
    cancelButton: cn(baseClassNames.cancelButton, incomingClassNames.cancelButton),
  }

  const mergedToastOptions: ToasterProps["toastOptions"] = {
    ...incomingToastOptions,
    classNames: mergedClassNames,
  }

  return (
    <Sonner
      theme={safeTheme}
      className={cn(baseClassName, incomingClassName)}
      toastOptions={mergedToastOptions}
      {...restProps}
    />
  )
}

export { Toaster, toast }
