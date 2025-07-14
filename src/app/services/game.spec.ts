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

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMilestones(): Observable<Milestone[]> {
    return this.http.get<Milestone[]>(`${this.apiUrl}/milestones`);
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/games`);
  }

  // --- MÉTODO CRUD: DELETE ---
  deleteGame(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/games/${id}`);
  }

  // --- MÉTODO CRUD: POST ---
  addGame(game: Omit<Game, 'id'>): Observable<Game> {
    return this.http.post<Game>(`${this.apiUrl}/games`, game);
  }
}