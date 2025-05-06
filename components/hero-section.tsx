"use client"

import { Button } from "@/components/ui/button"
import { HeartIcon, SparklesIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ModelWorkflow } from "@/components/model-workflow"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative overflow-hidden hero-gradient py-20 md:py-32">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium mb-6">
            <SparklesIcon className="h-4 w-4 text-pink-500" />
            <span>Machine Learning + Dating</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Will You <span className="text-pink-500">Match</span>?<br />
            Let's Predict Your Perfect Date!
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground md:text-xl">
            Using machine learning to predict speed dating matches with 85% accuracy. Discover the science behind
            attraction and compatibility.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              <HeartIcon className="mr-2 h-5 w-5" />
              Try the Predictor
            </Button>
            <Button size="lg" variant="outline">
              Learn About the Model
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16"
        >
          <ModelWorkflow />
        </motion.div>
      </div>

      {/* Animated background elements */}
      {mounted && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0 0c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10z' fill='%23ec4899' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E\")",
            }}
          />
          <div className="absolute top-20 left-10 z-0">
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <HeartIcon className="h-16 w-16 floating-heart" />
            </motion.div>
          </div>
          <div className="absolute bottom-20 right-10 z-0">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <HeartIcon className="h-24 w-24 floating-heart" />
            </motion.div>
          </div>
        </>
      )}
    </div>
  )
}
