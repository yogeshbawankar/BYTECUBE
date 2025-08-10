import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, max, ...props }, ref) => {
  // Normalize max to a positive, finite number; default to 100 if invalid
  const numericMax =
    typeof max === "number" && isFinite(max) && max > 0 ? max : 100

  // Determine determinate vs indeterminate
  const isDeterminate = typeof value === "number" && isFinite(value)

  // Clamp only when determinate; otherwise leave undefined to signal indeterminate
  const unclampedValue = isDeterminate ? (value as number) : undefined
  const clampedValue =
    isDeterminate && typeof unclampedValue === "number"
      ? Math.max(0, Math.min(unclampedValue, numericMax))
      : undefined
  const percentage =
    isDeterminate && typeof clampedValue === "number"
      ? (clampedValue / numericMax) * 100
      : undefined

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
      value={isDeterminate ? clampedValue : undefined}
      max={numericMax}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={
          isDeterminate && typeof percentage === "number"
            ? { transform: `translateX(-${100 - percentage}%)` }
            : undefined
        }
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
