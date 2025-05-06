import { NextResponse } from "next/server"

// This would be a more complex model in a real application
// For demo purposes, we're using a simplified calculation
function predictMatch(ratings: {
  attractiveness: number
  fun: number
  intelligence: number
  ambition: number
  sincerity: number
  sharedInterests: number
}) {
  // Weights based on our "findings"
  const weights = {
    attractiveness: 0.32,
    fun: 0.25,
    sharedInterests: 0.18,
    intelligence: 0.13,
    ambition: 0.08,
    sincerity: 0.04,
  }

  // Calculate weighted score
  let score = 0
  for (const [attribute, weight] of Object.entries(weights)) {
    score += ratings[attribute as keyof typeof ratings] * weight
  }

  // Normalize to probability (0-10 scale to 0-1)
  const probability = score / 10

  return {
    match: probability > 0.6, // Threshold for match
    probability: Math.round(probability * 100),
  }
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

    // In a real application, this would call a trained ML model
    // For demo purposes, we're using a simplified calculation
    const prediction = predictMatch(body)

    return NextResponse.json(prediction)
  } catch (error) {
    console.error("Error processing prediction:", error)
    return NextResponse.json({ error: "Failed to process prediction" }, { status: 500 })
  }
}
