import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatGptService {
  private apiUrl = 'https://api.openai.com/v1/completions';

  constructor(private httpClient: HttpClient) {}

  getResponse(prompt: string): Observable<Response> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer API_KEY', // Reemplaza API_KEY con tu propia clave de API
    });

    const body = {
      prompt: prompt,
      max_tokens: 2000,
      temperature: 0.3,
      model: 'text-davinci-003',
    };

    return this.httpClient.post(this.apiUrl, body, {
      headers,
    }) as Observable<Response>;
  }
}

/* Modelos de datos para la respuesta de ChatGPT */

export interface Response {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
}

export interface Choice {
  text: string;
  index: number;
  logprobs: any;
  finish_reason: string;
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
