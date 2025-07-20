import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Register } from './register';

describe('Register', () => {
  let component: Register;
  let fixture: ComponentFixture<Register>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Register, ReactiveFormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Register);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario debe ser inválido si la contraseña es muy corta', () => {
    const password = component.registerForm.get('password');
    password?.setValue('123'); // Menos de 8 caracteres
    expect(password?.valid).toBeFalsy();
    expect(password?.hasError('minlength')).toBe(true);
  });

  it('el formulario debe ser inválido si las contraseñas no coinciden', () => {
    const password = component.registerForm.get('password');
    const confirmPassword = component.registerForm.get('confirmPassword');

    password?.setValue('Password123*');
    confirmPassword?.setValue('PasswordDiferente');
    
    expect(component.registerForm.hasError('passwordsNotMatching')).toBe(true);
  });
});