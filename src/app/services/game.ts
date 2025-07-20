import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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
  private dataUrl = 'assets/db.json'; // Apunta al archivo local

  constructor(private http: HttpClient) { }

  getMilestones(): Observable<Milestone[]> {
    return this.http.get<{ milestones: Milestone[] }>(this.dataUrl).pipe(
      map(response => response.milestones)
    );
  }

  getGames(): Observable<Game[]> {
    return this.http.get<{ games: Game[] }>(this.dataUrl).pipe(
      map(response => response.games)
    );
  }
}