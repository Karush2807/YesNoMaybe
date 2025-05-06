import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, BarChart2, Database, Brain, Heart, Sparkles } from "lucide-react"
import Image from "next/image"
import FloatingHearts from "@/components/animations/floating-hearts"
import HeartPulse from "@/components/animations/heart-pulse"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative gradient-bg py-20 md:py-32 text-white overflow-hidden">
        <FloatingHearts count={15} />
        <div className="container flex flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <HeartPulse size="md" color="text-white" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Speed Date Predictor</h1>
          </div>
          <p className="mt-4 text-xl md:text-2xl text-white/80 max-w-2xl">
            Data-Driven Insights on Second Date Decisions
          </p>
          <p className="mt-6 text-lg md:text-xl font-medium bg-gradient-to-r from-pink-200 to-pink-100 text-transparent bg-clip-text">
            Predicting Chemistry, One Date at a Time
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/demo" className="flex items-center gap-2">
                Try the Demo
                <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Link href="/methodology">Explore Methodology</Link>
            </Button>
          </div>

          {/* Sample visualization */}
          <div className="mt-12 w-full max-w-3xl rounded-lg overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 card-hover-effect">
            <div className="p-4 border-b border-white/20">
              <h3 className="text-lg font-medium">Sample Distribution: Attribute Ratings</h3>
            </div>
            <div className="p-4">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Distribution of date attribute ratings"
                width={600}
                height={300}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-12 h-12 text-white/30 animate-spin-slow">
          <HeartIcon className="w-full h-full" />
        </div>
        <div
          className="absolute bottom-1/4 right-10 w-12 h-12 text-white/30 animate-spin-slow"
          style={{ animationDelay: "-5s" }}
        >
          <HeartIcon className="w-full h-full" />
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HeartPulse size="sm" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Project Overview</h2>
          </div>
          <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto">
            Our data science project analyzes speed dating interactions to identify key factors that influence second
            date decisions.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover-effect border-pink-100 dark:border-pink-900">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500">
                    <Database className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Rich Dataset</h3>
                  <p className="mt-2 text-muted-foreground">
                    Comprehensive data on participant demographics, ratings, and match outcomes
                  </p>
                  <Button variant="link" asChild className="mt-4 text-pink-500">
                    <Link href="/dataset" className="flex items-center">
                      Explore Dataset <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover-effect border-pink-100 dark:border-pink-900">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500">
                    <Brain className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Advanced Modeling</h3>
                  <p className="mt-2 text-muted-foreground">
                    Machine learning techniques to predict match outcomes based on multiple factors
                  </p>
                  <Button variant="link" asChild className="mt-4 text-pink-500">
                    <Link href="/methodology" className="flex items-center">
                      View Methodology <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover-effect border-pink-100 dark:border-pink-900">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500">
                    <BarChart2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Insightful Results</h3>
                  <p className="mt-2 text-muted-foreground">
                    Key findings on which attributes most influence second date decisions
                  </p>
                  <Button variant="link" asChild className="mt-4 text-pink-500">
                    <Link href="/results" className="flex items-center">
                      See Results <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 relative overflow-hidden">
        <FloatingHearts count={8} />
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-pink-500" fill="currentColor" />
              <h2 className="text-3xl md:text-4xl font-bold">Try Our Interactive Demo</h2>
            </div>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Input sample ratings and see our model's prediction for a second date match
            </p>
            <Button asChild size="lg" className="mt-8 group">
              <Link href="/demo" className="flex items-center gap-2">
                Launch Demo
                <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ML Model Integration Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="h-6 w-6 text-pink-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">ML Model Integration</h2>
          </div>
          <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto">
            Our project seamlessly integrates a sophisticated machine learning model to predict dating outcomes
          </p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-hover-effect">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Frontend Integration</h3>
                <div className="rounded-md bg-muted p-4 mb-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`// Next.js API route calling Python backend
async function predictMatch(ratings) {
  const response = await fetch('/api/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ratings)
  });
  return response.json();
}`}</code>
                  </pre>
                </div>
                <p className="text-muted-foreground">
                  The frontend sends user ratings to our API endpoints, which communicate with the Python ML model
                  backend
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover-effect">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Python ML Backend</h3>
                <div className="rounded-md bg-muted p-4 mb-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`# Python FastAPI endpoint
@app.post("/predict")
async def predict(data: RatingInput):
    # Preprocess input data
    features = preprocess_input(data)
    
    # Make prediction using trained model
    prediction = model.predict_proba(features)[0][1]
    
    return {
        "match": prediction > 0.6,
        "probability": float(prediction * 100)
    }`}</code>
                  </pre>
                </div>
                <p className="text-muted-foreground">
                  Our Python backend uses scikit-learn and FastAPI to serve predictions from our trained model
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="mt-4">
              <Link href="/backend">Learn More About Backend Integration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  )
}
