# app/schemas.py
from pydantic import BaseModel
from typing import Optional

class ReviewRequest(BaseModel):
    text: str

class ReviewResponse(BaseModel):
    sentiment: str
    confidence: float
    explanation: Optional[str] = None
