import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Filter, Code, BarChart2, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function MethodologyPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Methodology</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our data science approach combines rigorous data cleaning, feature engineering, and machine learning to
          predict second date decisions.
        </p>
      </div>

      <Tabs defaultValue="process" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="process">Process</TabsTrigger>
          <TabsTrigger value="cleaning">Data Cleaning</TabsTrigger>
          <TabsTrigger value="features">Feature Engineering</TabsTrigger>
          <TabsTrigger value="modeling">Modeling</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="mt-6">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 to-purple-300 dark:from-pink-700 dark:to-purple-700"></div>

            <div className="space-y-12 relative">
              <ProcessStep
                number="1"
                title="Data Collection & Preparation"
                description="We started with raw speed dating data containing participant information, ratings, and match outcomes."
                icon={<FileText className="h-6 w-6" />}
              />

              <ProcessStep
                number="2"
                title="Data Cleaning & Preprocessing"
                description="We handled missing values, removed outliers, and normalized numerical features to prepare the data for analysis."
                icon={<Filter className="h-6 w-6" />}
              />

              <ProcessStep
                number="3"
                title="Feature Engineering"
                description="We created new features from the raw data, including interaction terms and aggregated metrics to capture complex relationships."
                icon={<Code className="h-6 w-6" />}
              />

              <ProcessStep
                number="4"
                title="Model Development"
                description="We trained and evaluated multiple machine learning models to predict second date decisions based on participant attributes and ratings."
                icon={<BarChart2 className="h-6 w-6" />}
              />

              <ProcessStep
                number="5"
                title="Evaluation & Insights"
                description="We analyzed model performance and feature importance to identify the key factors that influence match outcomes."
                icon={<CheckCircle className="h-6 w-6" />}
              />
            </div>
          </div>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Methodology Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Methodology flowchart"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground text-center">
                End-to-end process flow from raw data to predictive insights
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cleaning" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Data Cleaning Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Missing Value Imputation</p>
                      <p className="text-sm text-muted-foreground">
                        We used mean imputation for numerical features and mode imputation for categorical features with
                        missing values.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Outlier Detection</p>
                      <p className="text-sm text-muted-foreground">
                        We identified and handled outliers using the IQR method to ensure they didn't skew our analysis.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Data Normalization</p>
                      <p className="text-sm text-muted-foreground">
                        We scaled numerical features to have zero mean and unit variance to improve model performance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 text-pink-500">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Encoding Categorical Variables</p>
                      <p className="text-sm text-muted-foreground">
                        We used one-hot encoding for categorical variables with few categories and target encoding for
                        high-cardinality features.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Quality Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Data quality metrics"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Completeness and quality metrics before and after cleaning
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">We created several derived features to capture complex relationships in the data:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-medium text-pink-500">Preference Alignment</h3>
                  <p className="mt-2 text-sm">
                    We calculated the difference between stated preferences and actual ratings to measure how well each
                    date matched expectations.
                  </p>
                  <div className="mt-3 p-2 bg-muted rounded text-xs font-mono">
                    preference_alignment = |stated_preference - actual_rating|
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-medium text-blue-500">Attribute Ratios</h3>
                  <p className="mt-2 text-sm">
                    We created ratios between different attribute ratings to capture relative importance.
                  </p>
                  <div className="mt-3 p-2 bg-muted rounded text-xs font-mono">
                    attractiveness_to_intelligence = attractiveness_rating / intelligence_rating
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-medium text-purple-500">Rating Variance</h3>
                  <p className="mt-2 text-sm">
                    We calculated the variance in ratings across all attributes to measure consistency.
                  </p>
                  <div className="mt-3 p-2 bg-muted rounded text-xs font-mono">
                    rating_variance = variance([attr1, attr2, ..., attrN])
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-medium text-green-500">Interaction Terms</h3>
                  <p className="mt-2 text-sm">
                    We created interaction features between key attributes to capture combined effects.
                  </p>
                  <div className="mt-3 p-2 bg-muted rounded text-xs font-mono">
                    fun_and_attractive = fun_rating * attractiveness_rating
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Feature Importance</h3>
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Feature importance"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Relative importance of original and engineered features
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modeling" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Model Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">We evaluated several machine learning models to find the best performer:</p>

                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="mr-3 flex-shrink-0 text-pink-500">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>Logistic Regression</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 flex-shrink-0 text-pink-500">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>Random Forest</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 flex-shrink-0 text-pink-500">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>Gradient Boosting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 flex-shrink-0 text-pink-500">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>Neural Networks</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Evaluation Metrics</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Accuracy</span>
                      <span className="font-medium">78.3%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Precision</span>
                      <span className="font-medium">76.1%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Recall</span>
                      <span className="font-medium">72.5%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">F1 Score</span>
                      <span className="font-medium">74.2%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">ROC-AUC</span>
                      <span className="font-medium">0.82</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Model Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Model performance comparison"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Performance comparison across different models
                </p>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Best Model: Gradient Boosting</h3>
                  <p className="text-sm text-muted-foreground">
                    Our gradient boosting model achieved the best overall performance with an accuracy of 78.3% and
                    ROC-AUC of 0.82. The model was fine-tuned using 5-fold cross-validation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProcessStep({
  number,
  title,
  description,
  icon,
}: {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 flex items-center justify-center w-16 relative">
        <div className="absolute w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 dark:from-pink-600 dark:to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
          {number}
        </div>
      </div>
      <div className="ml-4">
        <div className="flex items-center">
          <div className="mr-3 flex-shrink-0 p-2 bg-pink-100 dark:bg-pink-900 text-pink-500 rounded-full">{icon}</div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
