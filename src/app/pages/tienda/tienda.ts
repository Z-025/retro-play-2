import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game, GameService } from '../../services/game';
import { AuthService } from '../../services/auth'; // 1. Importa el servicio

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css'
})
export class Tienda implements OnInit {
  games: Game[] = [];

  constructor(
    private gameService: GameService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.gameService.getGames().subscribe(data => {
      this.games = data;
    });
  }

  addToCart(gameName: string): void {
    console.log(`${gameName} ha sido añadido al carrito.`);
    alert(`${gameName} ha sido añadido al carrito.`);
  }
}