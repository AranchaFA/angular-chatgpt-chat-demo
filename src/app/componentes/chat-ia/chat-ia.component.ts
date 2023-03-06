import { Component } from '@angular/core';
import { ChatGptService, Response } from 'src/app/servicios/chat-gpt.service';

@Component({
  selector: 'app-chat-ia',
  templateUrl: './chat-ia.component.html',
  styleUrls: ['./chat-ia.component.scss'],
})
export class ChatIaComponent {
  question: string = '';
  answer: string = '';

  constructor(private chatService: ChatGptService) {}

  sendQuestion() {
    this.chatService
      .getResponse(this.question)
      .subscribe((response: Response) => {
        this.answer = response.choices[0].text;
      });
    this.question = '';
  }
}
