"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { DatabaseIcon, BrainIcon, BarChart3Icon, HeartIcon, ArrowRightIcon } from "lucide-react"

export function ModelWorkflow() {
  const steps = [
    {
      icon: <DatabaseIcon className="h-8 w-8 text-pink-500" />,
      title: "Data Collection",
      description: "Speed dating event data",
    },
    {
      icon: <BarChart3Icon className="h-8 w-8 text-pink-500" />,
      title: "Feature Engineering",
      description: "Extract meaningful patterns",
    },
    {
      icon: <BrainIcon className="h-8 w-8 text-pink-500" />,
      title: "Model Training",
      description: "Logistic regression",
    },
    {
      icon: <HeartIcon className="h-8 w-8 text-pink-500" />,
      title: "Match Prediction",
      description: "85% accuracy",
    },
  ]

  return (
    <Card className="border-pink-500/20 overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 text-center">How Our Model Works</h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-3">{step.icon}</div>
              <h4 className="font-medium">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Connecting arrows for desktop */}
        <div className="hidden md:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 justify-between px-24 pointer-events-none">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <ArrowRightIcon className="h-6 w-6 text-pink-500/50" />
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
