"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Heart, HeartOff, Loader2, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Confetti } from "@/components/ui/confetti"
import MatchAnimation from "@/components/animations/match-animation"
import FloatingHearts from "@/components/animations/floating-hearts"

export default function DemoPage() {
  const [ratings, setRatings] = useState({
    attractiveness: 5,
    fun: 5,
    intelligence: 5,
    ambition: 5,
    sincerity: 5,
    sharedInterests: 5,
  })

  const [prediction, setPrediction] = useState<null | {
    match: boolean
    probability: number
    loading: boolean
  }>(null)

  const [showMatchAnimation, setShowMatchAnimation] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleRatingChange = (attribute: string, value: number[]) => {
    setRatings({
      ...ratings,
      [attribute]: value[0],
    })

    // Reset prediction when ratings change
    if (prediction) {
      setPrediction(null)
    }
  }

  const handlePredict = () => {
    setPrediction({ match: false, probability: 0, loading: true })

    // Simulate API call with timeout
    setTimeout(() => {
      // Simple prediction logic for demo purposes
      // In a real app, this would call the backend API
      const { attractiveness, fun, sharedInterests } = ratings

      // Weighted calculation based on our "findings"
      const score =
        attractiveness * 0.32 +
        fun * 0.25 +
        sharedInterests * 0.18 +
        ratings.intelligence * 0.13 +
        ratings.ambition * 0.08 +
        ratings.sincerity * 0.04

      // Normalize to probability (0-10 scale to 0-1)
      const probability = score / 10
      const isMatch = probability > 0.6

      setPrediction({
        match: isMatch,
        probability: Math.round(probability * 100),
        loading: false,
      })

      // Show match animation and confetti if it's a match
      if (isMatch) {
        setShowMatchAnimation(true)
        setShowConfetti(true)
      }
    }, 1500)
  }

  const resetDemo = () => {
    setRatings({
      attractiveness: 5,
      fun: 5,
      intelligence: 5,
      ambition: 5,
      sincerity: 5,
      sharedInterests: 5,
    })
    setPrediction(null)
  }

  return (
    <div className="container py-12 relative">
      <MatchAnimation show={showMatchAnimation} onComplete={() => setShowMatchAnimation(false)} />
      <Confetti show={showConfetti} onComplete={() => setShowConfetti(false)} />

      <div className="space-y-4 text-center mb-12">
        <div className="flex items-center justify-center gap-2">
          <Heart className="h-6 w-6 text-pink-500" fill="currentColor" />
          <h1 className="text-4xl font-bold tracking-tight">Interactive Demo</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Rate your date on different attributes and see if our model predicts a second date match!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="border-pink-100 dark:border-pink-900 overflow-hidden relative">
            <FloatingHearts count={5} />
            <CardHeader className="relative z-10">
              <CardTitle>Rate Your Date</CardTitle>
              <CardDescription>Adjust the sliders to rate your date on a scale from 1 to 10</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label htmlFor="attractiveness" className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-pink-500" fill="currentColor" />
                    Attractiveness
                  </Label>
                  <span className="text-muted-foreground">{ratings.attractiveness}/10</span>
                </div>
                <Slider
                  id="attractiveness"
                  min={1}
                  max={10}
                  step={1}
                  value={[ratings.attractiveness]}
                  onValueChange={(value) => handleRatingChange("attractiveness", value)}
                  className="[&>span]:bg-pink-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label htmlFor="fun">Fun</Label>
                  <span className="text-muted-foreground">{ratings.fun}/10</span>
                </div>
                <Slider
                  id="fun"
                  min={1}
                  max={10}
                  step={1}
                  value={[ratings.fun]}
                  onValueChange={(value) => handleRatingChange("fun", value)}
                  className="[&>span]:bg-pink-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label htmlFor="intelligence">Intelligence</Label>
                  <span className="text-muted-foreground">{ratings.intelligence}/10</span>
                </div>
                <Slider
                  id="intelligence"
                  min={1}
                  max={10}
                  step={1}
                  value={[ratings.intelligence]}
                  onValueChange={(value) => handleRatingChange("intelligence", value)}
                  className="[&>span]:bg-pink-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label htmlFor="ambition">Ambition</Label>
                  <span className="text-muted-foreground">{ratings.ambition}/10</span>
                </div>
                <Slider
                  id="ambition"
                  min={1}
                  max={10}
                  step={1}
                  value={[ratings.ambition]}
                  onValueChange={(value) => handleRatingChange("ambition", value)}
                  className="[&>span]:bg-pink-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label htmlFor="sincerity">Sincerity</Label>
                  <span className="text-muted-foreground">{ratings.sincerity}/10</span>
                </div>
                <Slider
                  id="sincerity"
                  min={1}
                  max={10}
                  step={1}
                  value={[ratings.sincerity]}
                  onValueChange={(value) => handleRatingChange("sincerity", value)}
                  className="[&>span]:bg-pink-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label htmlFor="sharedInterests">Shared Interests</Label>
                  <span className="text-muted-foreground">{ratings.sharedInterests}/10</span>
                </div>
                <Slider
                  id="sharedInterests"
                  min={1}
                  max={10}
                  step={1}
                  value={[ratings.sharedInterests]}
                  onValueChange={(value) => handleRatingChange("sharedInterests", value)}
                  className="[&>span]:bg-pink-500"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between relative z-10">
              <Button variant="outline" onClick={resetDemo}>
                Reset
              </Button>
              <Button onClick={handlePredict} className="group">
                Predict Match
                <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-pink-100 dark:border-pink-900 h-full">
            <CardHeader>
              <CardTitle>Prediction Result</CardTitle>
              <CardDescription>Our model's prediction based on your ratings</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
              {!prediction && (
                <div className="text-center text-muted-foreground">
                  <Heart className="h-16 w-16 mx-auto text-pink-200 dark:text-pink-900 mb-4" />
                  <p>Adjust the ratings and click "Predict Match" to see the result.</p>
                </div>
              )}

              {prediction?.loading && (
                <div className="text-center">
                  <Loader2 className="h-16 w-16 animate-spin text-pink-500 mx-auto" />
                  <p className="mt-4 text-muted-foreground">Analyzing your ratings...</p>
                </div>
              )}

              {prediction && !prediction.loading && (
                <motion.div
                  className="text-center space-y-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 12 }}
                >
                  <motion.div
                    className={cn(
                      "p-6 rounded-full",
                      prediction.match ? "bg-pink-100 dark:bg-pink-900" : "bg-gray-100 dark:bg-gray-800",
                    )}
                    animate={
                      prediction.match
                        ? {
                            scale: [1, 1.1, 1],
                          }
                        : {}
                    }
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  >
                    {prediction.match ? (
                      <Heart className="h-24 w-24 text-pink-500" fill="currentColor" />
                    ) : (
                      <HeartOff className="h-24 w-24 text-gray-500" />
                    )}
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold">{prediction.match ? "It's a Match!" : "Not a Match"}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {prediction.match
                        ? "Our model predicts you'll get a second date!"
                        : "Our model predicts you won't get a second date."}
                    </p>
                  </div>

                  <div className="w-full max-w-xs mx-auto">
                    <p className="mb-2 text-sm text-muted-foreground">Match Probability</p>
                    <div className="w-full bg-secondary rounded-full h-4">
                      <motion.div
                        className={cn("h-4 rounded-full", prediction.match ? "bg-pink-500" : "bg-gray-500")}
                        initial={{ width: 0 }}
                        animate={{ width: `${prediction.probability}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                    <p className="mt-2 text-sm font-medium">{prediction.probability}%</p>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <p>
                      {prediction.match
                        ? "Key factors: High ratings in attractiveness and fun."
                        : "Try increasing ratings for attractiveness, fun, or shared interests."}
                    </p>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="border-pink-100 dark:border-pink-900">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This interactive demo uses a simplified version of our machine learning model to predict the likelihood of
              a second date match based on your ratings. Here's how the prediction works:
            </p>

            <ol className="space-y-2 list-decimal list-inside">
              <li>
                <span className="font-medium">Input your ratings:</span> Rate your date on six key attributes.
              </li>
              <li>
                <span className="font-medium">Apply feature weights:</span> Our model weighs each attribute based on its
                importance:
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>Attractiveness: 32%</li>
                  <li>Fun: 25%</li>
                  <li>Shared Interests: 18%</li>
                  <li>Intelligence: 13%</li>
                  <li>Ambition: 8%</li>
                  <li>Sincerity: 4%</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Calculate probability:</span> The weighted sum is converted to a
                probability percentage.
              </li>
              <li>
                <span className="font-medium">Make prediction:</span> If the probability exceeds 60%, we predict a
                match!
              </li>
            </ol>

            <p className="mt-4 text-sm text-muted-foreground">
              Note: This is a simplified demo. Our full model incorporates more features and uses advanced machine
              learning techniques.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
