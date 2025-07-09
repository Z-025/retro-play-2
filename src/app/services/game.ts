import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Game {
  id: number;
  name: string;
  platform: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private dataUrl = 'assets/db.json'; // Ruta a tu archivo JSON

  constructor(private http: HttpClient) { }

  // Método GET
  getGames(): Observable<Game[]> {
    return this.http.get<{ games: Game[] }>(this.dataUrl).pipe(
      map(response => response.games)
    );
  }

  // Aquí simularías los otros métodos (POST, PUT, DELETE)
  // manipulando la data una vez obtenida para la demo.
}