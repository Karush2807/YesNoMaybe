import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Heart, Star, Calendar, Briefcase, GraduationCap, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function DatasetPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Dataset Overview</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our analysis is based on a comprehensive speed dating dataset with rich information about participants and
          their interactions.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Key Features</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Dataset Source</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The dataset was collected from participants in experimental speed dating events from 2002-2004. During
                  these events, participants had a series of 4-minute "first dates" with every other participant of the
                  opposite sex. After each date, participants filled out a scorecard.
                </p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  <span>550+ participants</span>
                  <Clock className="ml-4 mr-2 h-4 w-4" />
                  <span>8,000+ speed dates</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Before the events, participants completed questionnaires about themselves, their dating preferences,
                  and their expectations. After each speed date, they rated their date on various attributes and
                  indicated whether they would like to see their date again.
                </p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>2002-2004</span>
                  <MapPin className="ml-4 mr-2 h-4 w-4" />
                  <span>Multiple locations</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Sample Data Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Sample data visualization"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Distribution of participant ratings across different attributes
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Demographics"
              description="Age, gender, race, field of study, career, and income information for all participants."
            />
            <FeatureCard
              icon={<Star className="h-8 w-8" />}
              title="Attribute Ratings"
              description="Ratings on attractiveness, sincerity, intelligence, fun, ambition, and shared interests."
            />
            <FeatureCard
              icon={<Heart className="h-8 w-8" />}
              title="Match Outcomes"
              description="Binary indicators of whether participants wanted to see each other again."
            />
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8" />}
              title="Education & Background"
              description="Educational attainment, field of study, and school information."
            />
            <FeatureCard
              icon={<Briefcase className="h-8 w-8" />}
              title="Professional Info"
              description="Career field, income level, and professional ambitions."
            />
            <FeatureCard
              icon={<Calendar className="h-8 w-8" />}
              title="Dating History"
              description="Previous dating experience, relationship status, and dating goals."
            />
          </div>
        </TabsContent>

        <TabsContent value="statistics" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Age distribution"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Most participants were between 22-30 years old, with a median age of 26.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Match Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Match rate statistics"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Approximately 20% of all speed dates resulted in both participants wanting to see each other again.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Attribute Importance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[2/1] bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Attribute importance"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Participants rated attractiveness, fun, and intelligence as the most important attributes when
                  evaluating potential matches.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500">{icon}</div>
          <h3 className="mt-4 text-xl font-medium">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
