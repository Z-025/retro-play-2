import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

/**
 * @description
 * Componente para el inicio de sesión de usuario.
 * Contiene el formulario y la lógica para la autenticación.
 * @usageNotes
 * Se utiliza en la ruta '/login'.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  /**
   * @description Define el grupo de controles para el formulario de login.
   */
  loginForm: FormGroup;

  /**
   * @param {FormBuilder} fb - Servicio para construir formularios reactivos.
   * @param {AuthService} authService - Servicio para manejar la autenticación.
   * @param {Router} router - Servicio de Angular para la navegación.
   */
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /**
   * @description Getter para el control del email.
   */
  get email() { return this.loginForm.get('email'); }

  /**
   * @description Getter para el control de la contraseña.
   */
  get password() { return this.loginForm.get('password'); }

  /**
   * @description
   * Se ejecuta al enviar el formulario. Valida los datos, simula un inicio de sesión
   * y redirige al usuario a la página de inicio.
   * @returns {void}
   */
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const userEmail = this.loginForm.value.email;

    if (userEmail === 'admin@test.com') {
      this.authService.login('Administrador');
    } else {
      this.authService.login('Cliente');
    }

    this.router.navigate(['/home']);
  }
}