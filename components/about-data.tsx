"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartIcon, UsersIcon, StarIcon, BookOpenIcon, BarChart3Icon } from "lucide-react"
import { motion } from "framer-motion"

export function AboutData() {
  const features = [
    {
      icon: <UsersIcon className="h-10 w-10 text-pink-500" />,
      title: "Demographics",
      description: "Age, gender, race, field of study, and career information of participants",
    },
    {
      icon: <StarIcon className="h-10 w-10 text-pink-500" />,
      title: "Ratings",
      description:
        "Participants rated each other on attractiveness, sincerity, intelligence, fun, ambition, and shared interests",
    },
    {
      icon: <HeartIcon className="h-10 w-10 text-pink-500" />,
      title: "Match Decisions",
      description: "Binary decisions on whether participants wanted to see each other again",
    },
    {
      icon: <BookOpenIcon className="h-10 w-10 text-pink-500" />,
      title: "Preferences",
      description: "Self-reported importance of various attributes in potential partners",
    },
    {
      icon: <BarChart3Icon className="h-10 w-10 text-pink-500" />,
      title: "Expectations",
      description: "Pre-event expectations and post-event satisfaction ratings",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">About the Data</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our model is trained on real-world speed dating data collected from participants at various events. Here's
          what makes this dataset special:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-pink-500/20 h-full">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="border-pink-500/20 mt-8">
        <CardHeader>
          <CardTitle>Dataset Overview</CardTitle>
          <CardDescription>Key statistics about the speed dating dataset</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <h3 className="text-3xl font-bold text-pink-500">8,378</h3>
              <p className="text-sm text-muted-foreground">Interactions</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <h3 className="text-3xl font-bold text-pink-500">551</h3>
              <p className="text-sm text-muted-foreground">Participants</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <h3 className="text-3xl font-bold text-pink-500">6</h3>
              <p className="text-sm text-muted-foreground">Rating Categories</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <h3 className="text-3xl font-bold text-pink-500">17%</h3>
              <p className="text-sm text-muted-foreground">Match Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
