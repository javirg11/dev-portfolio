// src/app/services/sentiment-chat.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ReviewRequest {
  text: string;
}

export interface ReviewResponse {
  sentiment: string;
  confidence: number;
  explanation?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SentimentChatService {

  // 🔹 De momento, API local. Más adelante usaremos environment.* para prod.
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  analyze(text: string): Observable<ReviewResponse> {
    const body: ReviewRequest = { text };
    return this.http.post<ReviewResponse>(`${this.apiUrl}/chat-review`, body);
  }
}
