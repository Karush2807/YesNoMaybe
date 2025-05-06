"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { HeartIcon, BrainIcon, SmileIcon, BookOpenIcon, ThumbsUpIcon } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function ModelInsights() {
  const topPredictors = [
    {
      icon: <HeartIcon className="h-5 w-5 text-pink-500" />,
      name: "Attractiveness",
      importance: 92,
    },
    {
      icon: <SmileIcon className="h-5 w-5 text-pink-500" />,
      name: "Fun",
      importance: 85,
    },
    {
      icon: <BookOpenIcon className="h-5 w-5 text-pink-500" />,
      name: "Shared Interests",
      importance: 78,
    },
    {
      icon: <ThumbsUpIcon className="h-5 w-5 text-pink-500" />,
      name: "Mutual Liking",
      importance: 75,
    },
    {
      icon: <BrainIcon className="h-5 w-5 text-pink-500" />,
      name: "Intelligence",
      importance: 65,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Model Insights</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our machine learning model uses logistic regression to predict if two people will want a second date, based on
          their ratings, preferences, and demographics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-pink-500/20">
          <CardHeader>
            <CardTitle>Model Performance</CardTitle>
            <CardDescription>Key metrics from our model evaluation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Accuracy</span>
                <span className="font-bold text-pink-500">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-muted" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>ROC-AUC</span>
                <span className="font-bold text-pink-500">0.86</span>
              </div>
              <Progress value={86} className="h-2 bg-muted" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Precision</span>
                <span className="font-bold text-pink-500">0.82</span>
              </div>
              <Progress value={82} className="h-2 bg-muted" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Recall</span>
                <span className="font-bold text-pink-500">0.79</span>
              </div>
              <Progress value={79} className="h-2 bg-muted" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-500/20">
          <CardHeader>
            <CardTitle>Top Predictors</CardTitle>
            <CardDescription>Features with the highest importance in prediction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPredictors.map((predictor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    {predictor.icon}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{predictor.name}</p>
                      <span className="text-sm text-muted-foreground">{predictor.importance}%</span>
                    </div>
                    <Progress value={predictor.importance} className="h-2 bg-muted" />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Card className="border-pink-500/20">
          <CardHeader>
            <CardTitle>ROC Curve</CardTitle>
            <CardDescription>Receiver Operating Characteristic curve showing model performance</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="relative h-64 w-full">
              <Image src="/placeholder.svg?height=256&width=400" alt="ROC Curve" fill className="object-contain" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-500/20">
          <CardHeader>
            <CardTitle>Precision-Recall Curve</CardTitle>
            <CardDescription>Shows the tradeoff between precision and recall</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="relative h-64 w-full">
              <Image
                src="/placeholder.svg?height=256&width=400"
                alt="Precision-Recall Curve"
                fill
                className="object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-pink-500/20 mt-8">
        <CardHeader>
          <CardTitle>Model Development Process</CardTitle>
          <CardDescription>How we built and refined our prediction model</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold">Feature Engineering</h3>
                <p className="text-muted-foreground">Created meaningful features from raw speed dating data</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold">Feature Selection</h3>
                <p className="text-muted-foreground">
                  Used ANOVA F-test and Random Forest to select the most predictive features
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold">Model Training</h3>
                <p className="text-muted-foreground">Trained a logistic regression model with cross-validation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold">Hyperparameter Tuning</h3>
                <p className="text-muted-foreground">Optimized model parameters for best performance</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white font-bold">
                5
              </div>
              <div>
                <h3 className="font-bold">Evaluation</h3>
                <p className="text-muted-foreground">Tested on held-out data to ensure generalizability</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
