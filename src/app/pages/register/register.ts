import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @description Validador personalizado que verifica si dos campos de contraseña coinciden.
 * @param {AbstractControl} control El FormGroup que contiene los campos de contraseña.
 * @returns {ValidationErrors | null} Retorna un objeto de error si las contraseñas no coinciden, o null si coinciden.
 */
export function passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsNotMatching: true });
    return { passwordsNotMatching: true };
  }
  return null;
}

/**
 * @description
 * Componente para el registro de nuevos usuarios.
 * Incluye validaciones de seguridad para la contraseña.
 */
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  /**
   * @description Define el grupo de controles para el formulario de registro.
   */
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[A-Z]/),
        Validators.pattern(/[0-9]/),
        Validators.pattern(/[\W_]/)
      ]],
      confirmPassword: ['', Validators.required]
    }, { 
      validators: passwordsMatchValidator 
    });
  }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  /**
   * @description Se ejecuta al enviar el formulario de registro.
   */
  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log('Registro Exitoso:', this.registerForm.value);
  }
}