import { cn } from "@/lib/utils"
import { $background, $foreground } from "@/stores/colour-store"
import { useSelector } from "@tanstack/react-store"
import type { PropsWithChildren } from "react"

export function ColourWrapper({ children }: PropsWithChildren) {
  const background = useSelector($background)
  const foreground = useSelector($foreground)

  return <div className={cn(background, foreground)}>{children}</div>
}
