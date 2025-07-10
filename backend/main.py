from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI(
    title="Emotion Reflection API",
    description="A simple API that returns mock emotional analysis of user reflections.",
    version="1.0.0"
)

# --- CORS Setup ---
# Update allow_origins in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ✅ Replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Request Schema ---
class Reflection(BaseModel):
    text: str

# --- Emotion Analysis Endpoint ---
@app.post("/analyze")
def analyze_emotion(data: Reflection):
    """
    Accepts a text reflection and returns a mock emotion analysis.
    """
    fake_emotions = ["Happy", "Sad", "Anxious", "Excited", "Calm"]
    emotion = random.choice(fake_emotions)
    confidence = round(random.uniform(0.7, 0.99), 2)
    
    return {
        "emotion": emotion,
        "confidence": confidence
    }
