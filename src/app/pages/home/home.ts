import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService, Game } from '../../services/game';

/**
 * @description
 * Muestra la página de inicio o principal de la aplicación.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }
}
