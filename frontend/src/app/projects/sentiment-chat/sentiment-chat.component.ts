import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReviewResponse, SentimentChatService } from '../../services/sentiment-chat.service';

@Component({
  selector: 'app-sentiment-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './sentiment-chat.component.html',
  styleUrls: ['./sentiment-chat.component.scss']
})
export class SentimentChatComponent {

  userText = '';
  loading = false;
  error: string | null = null;
  lastResponse: ReviewResponse | null = null;

  constructor(private sentimentService: SentimentChatService) { }

  analyze() {
    this.error = null;
    this.lastResponse = null;

    const text = this.userText.trim();
    if (!text) {
      this.error = 'Please enter a review first.';
      return;
    }

    this.loading = true;

    this.sentimentService.analyze(text).subscribe({
      next: (res) => {
        this.loading = false;
        this.lastResponse = res;
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
        this.error = 'There was an error contacting the sentiment API.';
      }
    });
  }
}
