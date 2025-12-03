import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentChatComponent } from './sentiment-chat.component';

describe('SentimentChatComponent', () => {
  let component: SentimentChatComponent;
  let fixture: ComponentFixture<SentimentChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentimentChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
