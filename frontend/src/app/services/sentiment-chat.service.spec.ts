import { TestBed } from '@angular/core/testing';

import { SentimentChatService } from './sentiment-chat.service';

describe('SentimentChatService', () => {
  let service: SentimentChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentimentChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
