# app/main.py
from fastapi import FastAPI
from .schemas import ReviewRequest, ReviewResponse

app = FastAPI(
    title="Sentiment Chat API",
    description="API para analizar el sentimiento de reviews en modo demo.",
    version="0.1.0",
)


@app.get("/")
def read_root():
    return {"message": "Sentiment Chat backend is running"}


@app.post("/chat-review", response_model=ReviewResponse)
def chat_review(payload: ReviewRequest) -> ReviewResponse:
    """
    Endpoint de prueba que devuelve un sentimiento inventado
    según palabras clave muy simples.
    Más adelante aquí usaremos el modelo de ML.
    """
    text = payload.text.lower()

    # Lógica de prueba (dummy)
    negative_words = ["malo", "horrible", "fatal", "terrible", "tarde", "decepcionado"]
    positive_words = ["bueno", "genial", "fantástico", "maravilla", "encantado", "perfecto"]

    score = 0
    for w in negative_words:
        if w in text:
            score -= 1
    for w in positive_words:
        if w in text:
            score += 1

    if score > 0:
        sentiment = "positive"
        confidence = 0.8
        explanation = "Detected positive keywords in the review."
    elif score < 0:
        sentiment = "negative"
        confidence = 0.8
        explanation = "Detected negative keywords in the review."
    else:
        sentiment = "neutral"
        confidence = 0.6
        explanation = "No strong positive or negative keywords found."

    return ReviewResponse(
        sentiment=sentiment,
        confidence=confidence,
        explanation=explanation,
    )
