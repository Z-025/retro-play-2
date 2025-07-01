import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserRole: 'Cliente' | 'Administrador' | null = null;

  constructor() { }

  // Simula el inicio de sesión
  login(role: 'Cliente' | 'Administrador') {
    this.currentUserRole = role;
    console.log(`Usuario ha iniciado sesión como: ${this.currentUserRole}`);
  }

  // Simula el cierre de sesión
  logout() {
    this.currentUserRole = null;
    console.log('Usuario ha cerrado sesión.');
  }

  // Verifica si hay un usuario logueado
  isLoggedIn(): boolean {
    return this.currentUserRole !== null;
  }

  // Verifica si el usuario es Administrador
  isAdmin(): boolean {
    return this.currentUserRole === 'Administrador';
  }
}