"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { HeartIcon, HeartOffIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FancySlider } from "@/components/fancy-slider"

export function InteractiveDemo() {
  const [ratings, setRatings] = useState({
    attractiveness: 5,
    fun: 5,
    interests: 5,
    intelligence: 5,
    ambition: 5,
  })
  const [result, setResult] = useState<null | boolean>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handlePredict = () => {
    setIsAnimating(true)

    // Simple prediction logic based on weighted ratings
    // In a real app, this would call an API with a trained model
    setTimeout(() => {
      const score =
        ratings.attractiveness * 0.35 +
        ratings.fun * 0.25 +
        ratings.interests * 0.2 +
        ratings.intelligence * 0.1 +
        ratings.ambition * 0.1

      const willMatch = score >= 6.5
      setResult(willMatch)
      setIsAnimating(false)
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Try the Predictor</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Rate your potential match on these key attributes and see if our model predicts a successful match!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-pink-500/20">
          <CardHeader>
            <CardTitle>Rate Your Date</CardTitle>
            <CardDescription>How would you rate this person on each attribute?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-5">
              <div className="flex justify-between">
                <Label htmlFor="attractiveness">Attractiveness</Label>
                <span className="font-medium">{ratings.attractiveness}/10</span>
              </div>
              <FancySlider
                id="attractiveness"
                min={1}
                max={10}
                step={1}
                value={ratings.attractiveness}
                onChange={(value) => setRatings({ ...ratings, attractiveness: value })}
                emojis={["😕", "😐", "🙂", "😊", "😍"]}
              />
            </div>

            <div className="space-y-5">
              <div className="flex justify-between">
                <Label htmlFor="fun">Fun</Label>
                <span className="font-medium">{ratings.fun}/10</span>
              </div>
              <FancySlider
                id="fun"
                min={1}
                max={10}
                step={1}
                value={ratings.fun}
                onChange={(value) => setRatings({ ...ratings, fun: value })}
                emojis={["🥱", "😐", "🙂", "😄", "🤣"]}
              />
            </div>

            <div className="space-y-5">
              <div className="flex justify-between">
                <Label htmlFor="interests">Shared Interests</Label>
                <span className="font-medium">{ratings.interests}/10</span>
              </div>
              <FancySlider
                id="interests"
                min={1}
                max={10}
                step={1}
                value={ratings.interests}
                onChange={(value) => setRatings({ ...ratings, interests: value })}
                emojis={["🙅", "🤷", "👍", "👌", "🙌"]}
              />
            </div>

            <div className="space-y-5">
              <div className="flex justify-between">
                <Label htmlFor="intelligence">Intelligence</Label>
                <span className="font-medium">{ratings.intelligence}/10</span>
              </div>
              <FancySlider
                id="intelligence"
                min={1}
                max={10}
                step={1}
                value={ratings.intelligence}
                onChange={(value) => setRatings({ ...ratings, intelligence: value })}
                emojis={["🤔", "📚", "🧠", "🎓", "🧪"]}
              />
            </div>

            <div className="space-y-5">
              <div className="flex justify-between">
                <Label htmlFor="ambition">Ambition</Label>
                <span className="font-medium">{ratings.ambition}/10</span>
              </div>
              <FancySlider
                id="ambition"
                min={1}
                max={10}
                step={1}
                value={ratings.ambition}
                onChange={(value) => setRatings({ ...ratings, ambition: value })}
                emojis={["😴", "🚶", "🏃", "🚀", "🏆"]}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handlePredict} className="w-full bg-pink-600 hover:bg-pink-700" disabled={isAnimating}>
              Predict Match
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-pink-500/20 relative overflow-hidden">
          <CardHeader>
            <CardTitle>Prediction Result</CardTitle>
            <CardDescription>Will you match with this person?</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              {isAnimating ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    >
                      <HeartIcon className="w-24 h-24 text-pink-500" />
                    </motion.div>
                  </div>
                  <p className="text-lg font-medium">Calculating prediction...</p>
                </motion.div>
              ) : result === null ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <p className="text-muted-foreground">
                    Rate your potential match and click "Predict Match" to see the result
                  </p>
                </motion.div>
              ) : result ? (
                <motion.div
                  key="match"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                    className="mb-6"
                  >
                    <HeartIcon className="w-32 h-32 text-pink-500 mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-pink-500 mb-2">It's a Match!</h3>
                  <p className="text-muted-foreground">Our model predicts you'll want to see each other again!</p>
                </motion.div>
              ) : (
                <motion.div
                  key="no-match"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                    className="mb-6"
                  >
                    <HeartOffIcon className="w-32 h-32 text-muted-foreground mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Not a Match</h3>
                  <p className="text-muted-foreground">
                    Our model predicts you might not be compatible. But hey, algorithms aren't everything!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>

      <Card className="border-pink-500/20 mt-8">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
          <CardDescription>Understanding the prediction process</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Our model uses the ratings you provide to calculate a compatibility score. The attributes are weighted based
            on their importance:
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Attractiveness: 35% weight (most important predictor)</li>
            <li>Fun: 25% weight</li>
            <li>Shared Interests: 20% weight</li>
            <li>Intelligence: 10% weight</li>
            <li>Ambition: 10% weight</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            In our full model, we also consider demographic compatibility, mutual interest signals, and other factors
            from our dataset.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
