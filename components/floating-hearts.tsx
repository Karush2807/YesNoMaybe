"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { HeartIcon } from "lucide-react"
import { useTheme } from "next-themes"

export function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; x: number; size: number; delay: number; duration: number }[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // random horizontal position (0-100%)
      size: Math.random() * 16 + 8, // random size between 8-24px
      delay: Math.random() * 5, // random delay for animation start
      duration: Math.random() * 10 + 15, // random duration between 15-25s
    }))

    setHearts(initialHearts)

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 100,
          size: Math.random() * 16 + 8,
          delay: 0,
          duration: Math.random() * 10 + 15,
        },
      ])

      // Remove old hearts to prevent too many elements
      if (hearts.length > 20) {
        setHearts((prev) => prev.slice(1))
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", x: `${heart.x}%`, opacity: 0.3 }}
          animate={{ y: "-10vh", opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="absolute"
        >
          <HeartIcon style={{ width: heart.size, height: heart.size }} className="floating-heart" />
        </motion.div>
      ))}
    </div>
  )
}
