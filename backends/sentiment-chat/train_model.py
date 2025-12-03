# backends/sentiment-chat/train_model.py

from pathlib import Path

import joblib
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# 1. Directorios base
BASE_DIR = Path(__file__).resolve().parent
MODELS_DIR = BASE_DIR / "models"
MODELS_DIR.mkdir(exist_ok=True)


DATA_PATH = BASE_DIR / "data" / "processed" / "IMDB_Dataset.csv"
print(f"Cargando dataset desde: {DATA_PATH}")
df = pd.read_csv(DATA_PATH)

df = df.rename(columns={
    "review": "text",
    "sentiment": "label"
})

# (Opcional) Ver primeras filas para depurar
print(df.head())

# 3. Vectorización y división train/test
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df["text"])
y = df["label"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y
)

# 4. Entrenar el modelo
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# 5. Evaluación rápida en consola
y_pred = model.predict(X_test)
print("=== Classification report ===")
print(classification_report(y_test, y_pred))

# 6. Guardar modelo y vectorizador
model_path = MODELS_DIR / "sentiment_model.pkl"
vectorizer_path = MODELS_DIR / "vectorizer.pkl"

joblib.dump(model, model_path)
joblib.dump(vectorizer, vectorizer_path)

print(f"Modelo guardado en: {model_path}")
print(f"Vectorizador guardado en: {vectorizer_path}")
