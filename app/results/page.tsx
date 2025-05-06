import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Award, ThumbsUp, ThumbsDown } from "lucide-react"
import Image from "next/image"
import { ChartContainer, ChartTooltip, ChartBar, ChartTitle, ChartLegend } from "@/components/ui/chart"

export default function ResultsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Key Findings</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our analysis revealed fascinating insights about what drives second date decisions in speed dating.
        </p>
      </div>

      <Tabs defaultValue="key-findings" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="key-findings">Key Findings</TabsTrigger>
          <TabsTrigger value="visualizations">Visualizations</TabsTrigger>
          <TabsTrigger value="model-performance">Model Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="key-findings" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium">Top Predictive Factors</CardTitle>
                <Award className="h-5 w-5 text-pink-500" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">
                          1
                        </Badge>
                        <span>Attractiveness Rating</span>
                      </div>
                      <span className="font-medium">32.4%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: "32.4%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">
                          2
                        </Badge>
                        <span>Fun Rating</span>
                      </div>
                      <span className="font-medium">24.7%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: "24.7%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">
                          3
                        </Badge>
                        <span>Shared Interests</span>
                      </div>
                      <span className="font-medium">18.3%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: "18.3%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">
                          4
                        </Badge>
                        <span>Intelligence Rating</span>
                      </div>
                      <span className="font-medium">12.6%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: "12.6%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">
                          5
                        </Badge>
                        <span>Ambition Rating</span>
                      </div>
                      <span className="font-medium">8.1%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: "8.1%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium">Key Insights</CardTitle>
                <TrendingUp className="h-5 w-5 text-pink-500" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                      <ThumbsUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Physical attraction matters most</p>
                      <p className="text-sm text-muted-foreground">
                        Attractiveness ratings were the strongest predictor of match success, accounting for 32.4% of
                        the model's predictive power.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                      <ThumbsUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Fun trumps intelligence</p>
                      <p className="text-sm text-muted-foreground">
                        Being perceived as fun was more important than being perceived as intelligent for securing a
                        second date.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                      <ThumbsUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Shared interests create connection</p>
                      <p className="text-sm text-muted-foreground">
                        Having common interests significantly increased the likelihood of a mutual match, especially for
                        participants over 25.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                      <ThumbsDown className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Stated preferences often differ from actions</p>
                      <p className="text-sm text-muted-foreground">
                        What participants claimed to value in a partner often differed from what actually influenced
                        their decision to request a second date.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Gender Differences in Attribute Importance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ChartContainer
                  className="h-full"
                  data={[
                    { attribute: "Attractiveness", male: 35, female: 28 },
                    { attribute: "Fun", male: 22, female: 26 },
                    { attribute: "Intelligence", male: 10, female: 16 },
                    { attribute: "Ambition", male: 8, female: 12 },
                    { attribute: "Sincerity", male: 12, female: 14 },
                    { attribute: "Shared Interests", male: 13, female: 24 },
                  ]}
                >
                  <ChartTitle>Attribute Importance by Gender (%)</ChartTitle>
                  <ChartBar x="attribute" y="male" className="fill-blue-500" />
                  <ChartBar x="attribute" y="female" className="fill-pink-500" />
                  <ChartTooltip />
                  <ChartLegend
                    data={[
                      { name: "Male", color: "fill-blue-500" },
                      { name: "Female", color: "fill-pink-500" },
                    ]}
                  />
                </ChartContainer>
              </div>
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Men placed higher importance on physical attractiveness, while women valued shared interests and
                intelligence more.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visualizations" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Match Rate by Age Group</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Match rate by age group"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Match rates were highest among participants in the 25-30 age range.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attribute Rating Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Attribute rating distribution"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Distribution of ratings across different attributes shows intelligence and fun were rated highest on
                  average.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Correlation Between Attributes and Match Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[2/1] bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Correlation heatmap"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Correlation heatmap showing relationships between different attributes and match success.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="model-performance" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold">78.3%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Accuracy</p>
                <p className="text-xs text-muted-foreground">Percentage of correctly predicted match outcomes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold">0.82</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">ROC-AUC</p>
                <p className="text-xs text-muted-foreground">
                  Area under the ROC curve, measuring discrimination ability
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold">74.2%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">F1 Score</p>
                <p className="text-xs text-muted-foreground">Harmonic mean of precision and recall</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Confusion Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Confusion matrix"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Confusion matrix showing true positives, false positives, true negatives, and false negatives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ROC Curve</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="ROC curve"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  ROC curve showing the trade-off between true positive rate and false positive rate.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Model Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ChartContainer
                    className="h-full"
                    data={[
                      { model: "Logistic Regression", accuracy: 72, auc: 0.76, f1: 68 },
                      { model: "Random Forest", accuracy: 75, auc: 0.79, f1: 71 },
                      { model: "Gradient Boosting", accuracy: 78, auc: 0.82, f1: 74 },
                      { model: "Neural Network", accuracy: 76, auc: 0.8, f1: 72 },
                    ]}
                  >
                    <ChartTitle>Model Performance Metrics</ChartTitle>
                    <ChartBar x="model" y="accuracy" className="fill-pink-500" />
                    <ChartBar x="model" y="auc" className="fill-blue-500" yAxisId="auc" />
                    <ChartBar x="model" y="f1" className="fill-purple-500" />
                    <ChartTooltip />
                    <ChartLegend
                      data={[
                        { name: "Accuracy (%)", color: "fill-pink-500" },
                        { name: "AUC", color: "fill-blue-500" },
                        { name: "F1 Score (%)", color: "fill-purple-500" },
                      ]}
                    />
                  </ChartContainer>
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Performance comparison across different machine learning models.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
