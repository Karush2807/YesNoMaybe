import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Server, ArrowRight, FileCode, Cpu } from "lucide-react"

export default function BackendPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Backend Integration</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Learn how to integrate your Python ML model with the Speed Date Predictor frontend
        </p>
      </div>

      <Tabs defaultValue="architecture" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="python-backend">Python Backend</TabsTrigger>
          <TabsTrigger value="deployment">Deployment</TabsTrigger>
        </TabsList>

        <TabsContent value="architecture" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-muted p-4 mb-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`Next.js Frontend
        ↓ ↑
API Routes (Next.js)
        ↓ ↑
Python FastAPI Backend
        ↓ ↑
ML Model (scikit-learn/PyTorch)`}</code>
                  </pre>
                </div>
                <p className="mb-4">
                  The Speed Date Predictor uses a decoupled architecture with a Next.js frontend and a Python backend
                  for ML predictions:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <span className="font-medium">Next.js Frontend:</span> Handles UI, user interactions, and API
                    requests
                  </li>
                  <li>
                    <span className="font-medium">API Routes:</span> Next.js API routes proxy requests to the Python
                    backend
                  </li>
                  <li>
                    <span className="font-medium">Python FastAPI:</span> Serves the ML model and handles prediction
                    requests
                  </li>
                  <li>
                    <span className="font-medium">ML Model:</span> Trained model that generates match predictions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Communication Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <span className="font-medium">User submits ratings:</span>
                    <div className="ml-6 mt-2 rounded-md bg-muted p-3">
                      <code className="text-sm">{`// React component
const handleSubmit = async () => {
  setLoading(true);
  const response = await fetch('/api/predict', {
    method: 'POST',
    body: JSON.stringify(ratings)
  });
  const result = await response.json();
  setPrediction(result);
  setLoading(false);
};`}</code>
                    </div>
                  </li>
                  <li>
                    <span className="font-medium">Next.js API route forwards request:</span>
                    <div className="ml-6 mt-2 rounded-md bg-muted p-3">
                      <code className="text-sm">{`// pages/api/predict.js
export async function POST(req) {
  const ratings = await req.json();
  
  // Forward to Python backend
  const response = await fetch(
    'http://your-python-api.com/predict',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ratings)
    }
  );
  
  const prediction = await response.json();
  return Response.json(prediction);
}`}</code>
                    </div>
                  </li>
                  <li>
                    <span className="font-medium">Python backend processes request:</span>
                    <div className="ml-6 mt-2 rounded-md bg-muted p-3">
                      <code className="text-sm">{`# FastAPI endpoint
@app.post("/predict")
async def predict(data: RatingInput):
    # Process with ML model
    result = model.predict(data)
    return result`}</code>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="python-backend" className="mt-6">
          <div className="grid grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Python Backend Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Here's how to set up a Python FastAPI backend to serve your ML model:</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                      <FileCode className="h-5 w-5 text-pink-500" />
                      Project Structure
                    </h3>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`speed_date_api/
├── app/
│   ├── __init__.py
│   ├── main.py           # FastAPI application
│   ├── models/
│   │   ├── __init__.py
│   │   ├── input.py      # Pydantic models for request validation
│   │   └── ml_model.py   # ML model wrapper
│   └── utils/
│       ├── __init__.py
│       └── preprocessing.py
├── model/
│   └── speed_date_model.pkl  # Trained model
├── requirements.txt
└── Dockerfile`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                      <Cpu className="h-5 w-5 text-pink-500" />
                      ML Model Wrapper
                    </h3>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`# app/models/ml_model.py
import pickle
import numpy as np
from pathlib import Path

class SpeedDateModel:
    def __init__(self):
        model_path = Path(__file__).parent.parent.parent / "model" / "speed_date_model.pkl"
        with open(model_path, "rb") as f:
            self.model = pickle.load(f)
    
    def preprocess(self, data):
        # Convert input data to feature array
        features = np.array([
            data.attractiveness,
            data.fun,
            data.intelligence,
            data.ambition,
            data.sincerity,
            data.shared_interests
        ]).reshape(1, -1)
        
        # Add any necessary preprocessing steps
        # (scaling, encoding, etc.)
        return features
    
    def predict(self, data):
        features = self.preprocess(data)
        
        # Get prediction probability
        probability = self.model.predict_proba(features)[0][1]
        
        return {
            "match": bool(probability > 0.6),
            "probability": round(float(probability * 100), 1)
        }`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                      <Server className="h-5 w-5 text-pink-500" />
                      FastAPI Application
                    </h3>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.models.ml_model import SpeedDateModel

app = FastAPI(title="Speed Date Predictor API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize model
model = SpeedDateModel()

# Input validation model
class RatingInput(BaseModel):
    attractiveness: float
    fun: float
    intelligence: float
    ambition: float
    sincerity: float
    shared_interests: float
    
    class Config:
        schema_extra = {
            "example": {
                "attractiveness": 7.5,
                "fun": 8.0,
                "intelligence": 6.5,
                "ambition": 5.0,
                "sincerity": 7.0,
                "shared_interests": 8.5
            }
        }

@app.get("/")
async def root():
    return {"message": "Speed Date Predictor API"}

@app.post("/predict")
async def predict(data: RatingInput):
    result = model.predict(data)
    return result`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                      <Code className="h-5 w-5 text-pink-500" />
                      Requirements
                    </h3>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`# requirements.txt
fastapi==0.95.0
uvicorn==0.21.1
scikit-learn==1.2.2
numpy==1.24.2
pydantic==1.10.7
python-multipart==0.0.6`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Training Your ML Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Before deploying your backend, you'll need to train and save your ML model:</p>

                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`# train_model.py
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import pickle

# Load your speed dating dataset
data = pd.read_csv("speed_dating_data.csv")

# Prepare features and target
X = data[["attractiveness", "fun", "intelligence", "ambition", "sincerity", "shared_interests"]]
y = data["match"]  # 1 if both wanted a second date, 0 otherwise

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a pipeline with preprocessing and model
pipeline = Pipeline([
    ("scaler", StandardScaler()),
    ("classifier", GradientBoostingClassifier(
        n_estimators=100,
        learning_rate=0.1,
        max_depth=3,
        random_state=42
    ))
])

# Train the model
pipeline.fit(X_train, y_train)

# Evaluate
train_score = pipeline.score(X_train, y_train)
test_score = pipeline.score(X_test, y_test)

print(f"Training accuracy: {train_score:.4f}")
print(f"Testing accuracy: {test_score:.4f}")

# Save the model
with open("model/speed_date_model.pkl", "wb") as f:
    pickle.dump(pipeline, f)

print("Model saved to model/speed_date_model.pkl")`}</code>
                  </pre>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Running Your Backend</h3>
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`# Start the FastAPI server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`}</code>
                    </pre>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Your API will be available at http://localhost:8000 with interactive documentation at
                    http://localhost:8000/docs
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="deployment" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Deployment Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  There are several ways to deploy your Python backend alongside your Next.js frontend:
                </p>

                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-pink-500 mb-2">Option 1: Separate Deployments</h3>
                    <p className="mb-2 text-sm">
                      Deploy your Next.js frontend on Vercel and your Python backend on a separate platform.
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                      <li>Deploy Python backend to Heroku, Railway, or DigitalOcean</li>
                      <li>Configure CORS to allow requests from your frontend domain</li>
                      <li>Update API URLs in your frontend to point to your deployed backend</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-pink-500 mb-2">Option 2: Containerized Deployment</h3>
                    <p className="mb-2 text-sm">
                      Use Docker to containerize both your frontend and backend, then deploy them together.
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                      <li>Create Docker Compose setup with Next.js and Python services</li>
                      <li>Deploy to platforms like AWS ECS, Google Cloud Run, or DigitalOcean App Platform</li>
                      <li>Use a reverse proxy (like Nginx) to route requests to the appropriate service</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-pink-500 mb-2">Option 3: Serverless Functions</h3>
                    <p className="mb-2 text-sm">Convert your Python model to a serverless function format.</p>
                    <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                      <li>AWS Lambda with API Gateway</li>
                      <li>Google Cloud Functions</li>
                      <li>Azure Functions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Docker Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Here's how to containerize your Python backend with Docker:</p>

                <div className="rounded-md bg-muted p-4 mb-6">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`# Dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}</code>
                  </pre>
                </div>

                <p className="mb-4">And a Docker Compose file to run both services together:</p>

                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`# docker-compose.yml
version: '3'

services:
  frontend:
    build:
      context: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:8000
    depends_on:
      - backend

  backend:
    build:
      context: ./backend
    ports:
      - "8000:8000"
    volumes:
      - ./backend/model:/app/model`}</code>
                  </pre>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Deployment Commands</h3>
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`# Build and start the containers
docker-compose up --build

# Run in detached mode
docker-compose up -d`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Environment Variables</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Properly configure environment variables to securely connect your frontend and backend:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Frontend (.env.local)</h3>
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`# Next.js frontend environment variables
NEXT_PUBLIC_API_URL=https://your-python-api.com
# For development
# NEXT_PUBLIC_API_URL=http://localhost:8000`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Backend (.env)</h3>
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`# Python backend environment variables
ALLOWED_ORIGINS=https://your-frontend-domain.com
MODEL_PATH=/app/model/speed_date_model.pkl
DEBUG=False`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button asChild>
                  <Link href="/demo" className="flex items-center gap-2">
                    Try the Demo <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
