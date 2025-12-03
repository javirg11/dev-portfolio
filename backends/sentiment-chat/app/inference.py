# backends/sentiment-chat/app/inference.py

from pathlib import Path
import joblib


# 1. Cargar modelo y vectorizador al iniciar el módulo
BASE_DIR = Path(__file__).resolve().parent.parent
MODELS_DIR = BASE_DIR / "models"

model_path = MODELS_DIR / "sentiment_model.pkl"
vectorizer_path = MODELS_DIR / "vectorizer.pkl"

print(f"Cargando modelo desde: {model_path}")
print(f"Cargando vectorizador desde: {vectorizer_path}")

model = joblib.load(model_path)
vectorizer = joblib.load(vectorizer_path)


def predict_review(text: str) -> dict:
    """
    Recibe un texto y devuelve un dict con:
    - sentiment: etiqueta predicha (positive/negative/neutral)
    - confidence: probabilidad asociada a esa predicción
    - explanation: pequeño texto explicativo
    """
    X = vectorizer.transform([text])
    proba = model.predict_proba(X)[0]
    classes = model.classes_

    # Índice de la clase con mayor probabilidad
    idx_max = int(proba.argmax())
    sentiment = str(classes[idx_max])
    confidence = float(proba[idx_max])

    explanation = f"Predicted sentiment '{sentiment}' with probability {confidence:.2f}."

    return {
        "sentiment": sentiment,
        "confidence": confidence,
        "explanation": explanation,
    }
