import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from './services/auth';
import { CommonModule } from '@angular/common';

/**
 * @description
 * Componente raíz de la aplicación. Actúa como el contenedor principal
 * y la cáscara de la aplicación, renderizando la navegación y el contenido de las rutas.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /**
   * @description Título de la aplicación.
   */
  protected title = 'retro-play';

  /**
   * @param {AuthService} authService - Servicio público para ser accedido desde la plantilla HTML.
   * @param {Router} router - Servicio de Angular para la navegación.
   */
  constructor(public authService: AuthService, private router: Router) {}

  /**
   * @description
   * Cierra la sesión del usuario a través del AuthService y lo redirige a la página de login.
   * @returns {void}
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}