import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeartIcon, SparklesIcon, Users2Icon, BrainIcon, HeartHandshakeIcon } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { HeroSection } from "@/components/hero-section"
import { AboutData } from "@/components/about-data"
import { ModelInsights } from "@/components/model-insights"
import { InteractiveDemo } from "@/components/interactive-demo"
import { FloatingHearts } from "@/components/floating-hearts"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <HeartIcon className="h-6 w-6 text-pink-500" />
          <span className="font-bold text-xl">Match Predictor</span>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button asChild variant="outline">
            <Link href="https://github.com">GitHub</Link>
          </Button>
        </div>
      </nav>

      <HeroSection />

      <div className="container py-12 relative">
        <FloatingHearts />

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="about" className="flex items-center gap-2">
              <Users2Icon className="h-4 w-4" />
              <span>About the Data</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <BrainIcon className="h-4 w-4" />
              <span>Model Insights</span>
            </TabsTrigger>
            <TabsTrigger value="demo" className="flex items-center gap-2">
              <SparklesIcon className="h-4 w-4" />
              <span>Try It Out</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <AboutData />
          </TabsContent>

          <TabsContent value="insights">
            <ModelInsights />
          </TabsContent>

          <TabsContent value="demo">
            <InteractiveDemo />
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-muted/30 py-12 mt-12">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HeartHandshakeIcon className="h-6 w-6 text-pink-500" />
            <h3 className="text-xl font-bold">Built with 💖 by Your Name</h3>
          </div>
          <p className="text-muted-foreground mb-6">Making data science and dating approachable and delightful!</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://twitter.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:example@example.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  )
}
