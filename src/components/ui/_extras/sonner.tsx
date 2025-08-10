"use client"
import type { ComponentProps } from "react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"
import { cn } from "@/lib/utils"

type ToasterProps = ComponentProps<typeof Sonner>

function isValidTheme(value: unknown): value is NonNullable<ToasterProps["theme"]> {
  return value === "light" || value === "dark" || value === "system"
}

const Toaster = ({
  theme: themeProp,
  className: incomingClassName,
  toastOptions: incomingToastOptions,
  ...restProps
}: ToasterProps) => {
  const { theme: contextTheme = "system" } = useTheme()

  const effectiveTheme: NonNullable<ToasterProps["theme"]> = isValidTheme(
    themeProp,
  )
    ? themeProp
    : isValidTheme(contextTheme)
      ? contextTheme
      : "system"

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

  const mergedClassNames = {
    toast: cn(baseClassNames.toast, incomingToastOptions?.classNames?.toast),
    description: cn(
      baseClassNames.description,
      incomingToastOptions?.classNames?.description,
    ),
    actionButton: cn(
      baseClassNames.actionButton,
      incomingToastOptions?.classNames?.actionButton,
    ),
    cancelButton: cn(
      baseClassNames.cancelButton,
      incomingToastOptions?.classNames?.cancelButton,
    ),
  }

  const mergedToastOptions: ToasterProps["toastOptions"] = {
    ...(incomingToastOptions ?? {}),
    classNames: mergedClassNames,
  }

  return (
    <Sonner
      theme={effectiveTheme}
      className={cn(baseClassName, incomingClassName)}
      toastOptions={mergedToastOptions}
      {...restProps}
    />
  )
}

export { Toaster, toast }
