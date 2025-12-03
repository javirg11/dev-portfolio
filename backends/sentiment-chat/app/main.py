# backends/sentiment-chat/app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .schemas import ReviewRequest, ReviewResponse
from .inference import predict_review

app = FastAPI(
    title="Sentiment Chat API",
    description="API para analizar el sentimiento de reviews.",
    version="0.1.0",
)

origins = [
    "http://localhost:4200",
    "https://fjavierredondo.vercel.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Sentiment Chat backend is running 🚀"}


@app.post("/chat-review", response_model=ReviewResponse)
def chat_review(payload: ReviewRequest) -> ReviewResponse:
    """
    Endpoint que usa el modelo de ML para analizar el sentimiento.
    """
    result = predict_review(payload.text)

    return ReviewResponse(
        sentiment=result["sentiment"],
        confidence=result["confidence"],
        explanation=result["explanation"],
    )
