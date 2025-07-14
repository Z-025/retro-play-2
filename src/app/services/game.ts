import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Game {
  id: number;
  year: number;
  name: string;
  platform: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface Milestone {
  id: number;
  year: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'http://localhost:3000'; // URL base de la API

  constructor(private http: HttpClient) { }

  // --- GET ---
  getMilestones(): Observable<Milestone[]> {
    return this.http.get<Milestone[]>(`${this.apiUrl}/milestones`);
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/games`);
  }

  // --- DELETE ---
  deleteGame(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/games/${id}`);
  }

  // --- POST ---
  addGame(game: Omit<Game, 'id'>): Observable<Game> {
    return this.http.post<Game>(`${this.apiUrl}/games`, game);
  }

  // --- PUT ---
  updateGame(game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.apiUrl}/games/${game.id}`, game);
  }
}