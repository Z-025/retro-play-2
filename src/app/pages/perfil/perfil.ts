import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @description Validador personalizado que verifica si la nueva contraseña y su confirmación coinciden.
 * @param {AbstractControl} control El FormGroup que contiene los campos de la nueva contraseña.
 * @returns {ValidationErrors | null} Un objeto de error si no coinciden, o null si coinciden.
 */
export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const newPassword = control.get('newPassword')?.value;
  const confirmNewPassword = control.get('confirmNewPassword')?.value;
  
  if (newPassword || confirmNewPassword) {
    return newPassword === confirmNewPassword ? null : { passwordMismatch: true };
  }
  return null;
}

/**
 * @description
 * Componente para que el usuario vea y actualice su información de perfil,
 * incluyendo el cambio de contraseña.
 */
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {
  /**
   * @description El FormGroup que maneja los datos y validaciones del formulario de perfil.
   */
  perfilForm: FormGroup;
  
  /**
   * @description Objeto con datos de ejemplo para el usuario actual.
   */
  currentUser = {
    name: 'Pamela',
    email: 'pamel@email.com'
  };

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      name: ['', Validators.required],
      email: [{ value: '', disabled: true }],
      currentPassword: [''],
      newPassword: ['', [
        Validators.minLength(8),
        Validators.pattern(/[A-Z]/),
        Validators.pattern(/[0-9]/),
        Validators.pattern(/[\W_]/)
      ]],
      confirmNewPassword: ['']
    }, {
      validators: passwordMatchValidator
    });
  }

  /**
   * @description
   * Método del ciclo de vida de Angular que se ejecuta al iniciar el componente.
   * Carga los datos del usuario actual en el formulario.
   * @returns {void}
   */
  ngOnInit(): void {
    this.perfilForm.patchValue({
      name: this.currentUser.name,
      email: this.currentUser.email
    });
  }

  /**
   * @description
   * Se ejecuta al enviar el formulario para actualizar el perfil.
   * @returns {void}
   */
  onSubmit() {
    if (this.perfilForm.valid) {
      // Usamos getRawValue() para incluir los campos deshabilitados como el email.
      console.log('Perfil actualizado:', this.perfilForm.getRawValue());
    } else {
      console.log('Formulario de perfil no es válido.');
    }
  }
}