import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">About the Project</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Learn more about the team and motivation behind the Speed Date Predictor project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Project Background</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Speed Date Predictor project began as an exploration into the factors that influence romantic
              attraction and dating decisions. We were curious about which attributes truly matter when people decide
              whether to pursue a second date.
            </p>
            <p className="mb-4">
              Using a rich dataset from experimental speed dating events, we applied data science techniques to uncover
              patterns and build a predictive model that could identify the key drivers of dating success.
            </p>
            <p>
              Our findings challenge some common assumptions about dating preferences and provide data-driven insights
              into the complex dynamics of romantic attraction.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link href="https://github.com">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link href="/methodology">
                  <FileText className="h-4 w-4" />
                  Read Methodology
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Research Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Identify key predictors</p>
                  <p className="text-sm text-muted-foreground">
                    Determine which personal attributes and interaction factors most strongly predict second date
                    decisions.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Analyze gender differences</p>
                  <p className="text-sm text-muted-foreground">
                    Explore how men and women differ in their evaluation criteria and decision-making processes.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Build predictive models</p>
                  <p className="text-sm text-muted-foreground">
                    Develop machine learning models that can accurately predict match outcomes based on participant
                    attributes and ratings.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Compare stated vs. revealed preferences</p>
                  <p className="text-sm text-muted-foreground">
                    Examine the differences between what people say they want in a partner and what actually influences
                    their decisions.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Meet the Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <TeamMember
          name="Alex Johnson"
          role="Data Scientist"
          bio="Alex led the data cleaning and model development, specializing in machine learning algorithms and feature engineering."
          avatar="/placeholder.svg?height=100&width=100"
        />

        <TeamMember
          name="Sophia Chen"
          role="Research Lead"
          bio="Sophia designed the research methodology and led the analysis of gender differences in dating preferences."
          avatar="/placeholder.svg?height=100&width=100"
        />

        <TeamMember
          name="Marcus Williams"
          role="Full Stack Developer"
          bio="Marcus built the interactive demo and website, translating complex data insights into an accessible user experience."
          avatar="/placeholder.svg?height=100&width=100"
        />
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            Have questions about our methodology, findings, or want to collaborate on future research? We'd love to hear
            from you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="mailto:contact@example.com">
                <Mail className="h-4 w-4" />
                Email Us
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="https://linkedin.com">
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="https://github.com">
                <Github className="h-4 w-4" />
                Follow on GitHub
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TeamMember({
  name,
  role,
  bio,
  avatar,
}: {
  name: string
  role: string
  bio: string
  avatar: string
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h3 className="mt-4 text-xl font-medium">{name}</h3>
          <p className="text-sm text-pink-500 font-medium">{role}</p>
          <p className="mt-2 text-sm text-muted-foreground">{bio}</p>

          <div className="mt-4 flex space-x-3">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
