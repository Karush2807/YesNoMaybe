"use client"

import { useEffect, useState } from "react"
import ReactConfetti from "react-confetti"
import { useWindowSize } from "@/hooks/use-window-size"

interface ConfettiProps {
  show: boolean
  duration?: number
  onComplete?: () => void
}

export function Confetti({ show, duration = 3000, onComplete }: ConfettiProps) {
  const [isActive, setIsActive] = useState(false)
  const { width, height } = useWindowSize()

  useEffect(() => {
    if (show) {
      setIsActive(true)
      const timer = setTimeout(() => {
        setIsActive(false)
        if (onComplete) {
          onComplete()
        }
      }, duration)

      return () => clearTimeout(timer)
    }
    return undefined
  }, [show, duration, onComplete])

  if (!isActive) return null

  return (
    <ReactConfetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={500}
      gravity={0.15}
      colors={["#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d"]}
    />
  )
}
