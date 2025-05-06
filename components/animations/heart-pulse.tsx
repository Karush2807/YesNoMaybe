"use client"

import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeartPulseProps {
  size?: "sm" | "md" | "lg" | "xl"
  color?: string
  filled?: boolean
  className?: string
}

export default function HeartPulse({
  size = "md",
  color = "text-pink-500",
  filled = true,
  className,
}: HeartPulseProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  }

  return (
    <div className={cn("inline-flex animate-heartbeat", className)}>
      <Heart className={cn(sizeClasses[size], color)} fill={filled ? "currentColor" : "none"} />
    </div>
  )
}
