from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

# Allow frontend requests ( CORS setup )
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request schema
class Reflection(BaseModel):
    text: str

# Analysis route
@app.post("/analyze")
def analyze_emotion(data: Reflection):
    fake_emotions = ["Happy", "Sad", "Anxious", "Excited", "Calm"]
    emotion = random.choice(fake_emotions)
    confidence = round(random.uniform(0.7, 0.99), 2)
    return {"emotion": emotion, "confidence": confidence}
