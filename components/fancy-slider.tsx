"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface FancySliderProps {
  min: number
  max: number
  step?: number
  value: number
  onChange: (value: number) => void
  id: string
  emojis?: string[]
}

export function FancySlider({
  min,
  max,
  step = 1,
  value,
  onChange,
  id,
  emojis = ["😞", "😐", "🙂", "😊", "😍"],
}: FancySliderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  // Calculate percentage for styling
  const percentage = ((value - min) / (max - min)) * 100

  // Get emoji based on value
  const getEmoji = () => {
    const emojiIndex = Math.floor(((value - min) / (max - min)) * (emojis.length - 1))
    return emojis[emojiIndex]
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateValue(e)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && trackRef.current) {
      updateValue(e)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const updateValue = (e: MouseEvent | React.MouseEvent) => {
    if (trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(1, offsetX / rect.width))

      // Calculate value based on percentage, min, max, and step
      let newValue = min + percentage * (max - min)

      // Apply step
      if (step) {
        newValue = Math.round(newValue / step) * step
      }

      // Ensure value is within bounds
      newValue = Math.max(min, Math.min(max, newValue))

      onChange(newValue)
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  return (
    <div className="fancy-slider" id={id}>
      <div ref={trackRef} className="slider-track" onMouseDown={handleMouseDown}>
        <div className="slider-track-active" style={{ width: `${percentage}%` }} />
      </div>

      <motion.div
        className="slider-thumb"
        style={{ left: `${percentage}%` }}
        whileTap={{ scale: 1.2 }}
        whileHover={{ scale: 1.1 }}
      />

      <motion.div
        className="slider-emoji"
        style={{ left: `${percentage}%` }}
        animate={{
          scale: isDragging ? 1.2 : 1,
          y: isDragging ? -5 : 0,
        }}
      >
        {getEmoji()}
      </motion.div>
    </div>
  )
}
