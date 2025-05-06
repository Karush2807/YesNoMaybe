import { NextResponse } from "next/server"

// This would be a more sophisticated model in a real application
// Here we're simulating a model API endpoint

// Mock model coefficients
const MODEL_COEFFICIENTS = {
  intercept: -3.2,
  attractiveness: 0.42,
  fun: 0.38,
  intelligence: 0.21,
  ambition: 0.15,
  sincerity: 0.08,
  sharedInterests: 0.26,
  // Interaction terms
  attractiveness_fun: 0.03,
  attractiveness_intelligence: 0.02,
  fun_sharedInterests: 0.04,
}

// Sigmoid function for logistic regression
function sigmoid(z: number): number {
  return 1 / (1 + Math.exp(-z))
}

// Predict using logistic regression
function predictLogisticRegression(features: Record<string, number>): number {
  let z = MODEL_COEFFICIENTS.intercept

  // Add linear terms
  for (const [feature, value] of Object.entries(features)) {
    if (feature in MODEL_COEFFICIENTS) {
      z += MODEL_COEFFICIENTS[feature as keyof typeof MODEL_COEFFICIENTS] * value
    }
  }

  // Add interaction terms
  if ("attractiveness" in features && "fun" in features) {
    z += MODEL_COEFFICIENTS.attractiveness_fun * features.attractiveness * features.fun
  }

  if ("attractiveness" in features && "intelligence" in features) {
    z += MODEL_COEFFICIENTS.attractiveness_intelligence * features.attractiveness * features.intelligence
  }

  if ("fun" in features && "sharedInterests" in features) {
    z += MODEL_COEFFICIENTS.fun_sharedInterests * features.fun * features.sharedInterests
  }

  // Apply sigmoid to get probability
  return sigmoid(z)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const requiredFields = ["attractiveness", "fun", "intelligence", "ambition", "sincerity", "sharedInterests"]

    for (const field of requiredFields) {
      if (!(field in body) || typeof body[field] !== "number" || body[field] < 1 || body[field] > 10) {
        return NextResponse.json(
          { error: `Invalid or missing field: ${field}. Must be a number between 1-10.` },
          { status: 400 },
        )
      }
    }

    // Normalize ratings from 1-10 scale to 0-1 scale
    const normalizedFeatures: Record<string, number> = {}
    for (const [key, value] of Object.entries(body)) {
      normalizedFeatures[key] = (value as number) / 10
    }

    // Get prediction probability
    const probability = predictLogisticRegression(normalizedFeatures)

    // Format response
    const response = {
      match: probability > 0.6, // Threshold for match
      probability: Math.round(probability * 100),
      model: "gradient_boosting", // In a real app, this would be the actual model used
      version: "1.0.0",
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("Error processing model prediction:", error)
    return NextResponse.json({ error: "Failed to process model prediction" }, { status: 500 })
  }
}
