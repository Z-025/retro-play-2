import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @description
 * Componente para la recuperación de contraseña.
 * El usuario ingresa su email para recibir un enlace de recuperación.
 */
@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './recuperar.html',
  styleUrl: './recuperar.css'
})
export class Recuperar {
  /**
   * @description El FormGroup que maneja el formulario de recuperación de contraseña.
   */
  recuperarForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.recuperarForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * @description
   * Se ejecuta al enviar el formulario de recuperación.
   * Valida el email y simula el envío de un enlace.
   * @returns {void}
   */
  onSubmit() {
    if (this.recuperarForm.valid) {
      console.log('Enviando enlace de recuperación a:', this.recuperarForm.value.email);
      // Aquí iría la lógica para el envío del enlace
    }
  }
}