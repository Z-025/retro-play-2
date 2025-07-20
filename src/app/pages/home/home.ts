import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game, Milestone, GameService } from '../../services/game';
import { AuthService } from '../../services/auth'; // 1. Importa el servicio

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  milestones: Milestone[] = [];
  games: Game[] = [];

  // 2. Inyecta AuthService en el constructor
  constructor(
    private gameService: GameService,
    public authService: AuthService 
  ) {}

  ngOnInit(): void {
    this.gameService.getMilestones().subscribe(data => {
      this.milestones = data;
    });
    this.loadGames();
  }

  loadGames(): void {
    this.gameService.getGames().subscribe(data => {
      this.games = data;
    });
  }

  scrollTo(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}