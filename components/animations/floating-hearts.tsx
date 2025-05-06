"use client"

import { useEffect, useState, useRef } from "react"
import { Heart } from "lucide-react"

interface FloatingHeartsProps {
  count?: number
  colors?: string[]
  containerClassName?: string
}

export default function FloatingHearts({
  count = 10,
  colors = ["text-pink-300", "text-pink-400", "text-pink-500", "text-red-400", "text-red-300"],
  containerClassName = "absolute inset-0 pointer-events-none",
}: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; size: number; color: string; delay: number }>>([])
  const initialized = useRef(false)

  useEffect(() => {
    // Only initialize hearts once to prevent infinite re-renders
    if (!initialized.current) {
      const newHearts = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // random x position (0-100%)
        size: Math.random() * 16 + 8, // random size (8-24px)
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5, // random delay (0-5s)
      }))
      setHearts(newHearts)
      initialized.current = true
    }
  }, []) // Empty dependency array to run only once

  return (
    <div className={containerClassName}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.x}%`,
            bottom: "-20px",
            animationDelay: `${heart.delay}s`,
            animationDuration: `${4 + Math.random() * 4}s`, // 4-8s duration
          }}
        >
          <Heart
            className={`${heart.color}`}
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
            fill="currentColor"
          />
        </div>
      ))}
    </div>
  )
}
