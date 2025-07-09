import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Login } from './login';
import { RouterTestingModule } from '@angular/router/testing';

describe('Login Component', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Login, ReactiveFormsModule, RouterTestingModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario debe ser inválido cuando está vacío', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('el campo de email debe ser inválido si el formato no es correcto', () => {
    const email = component.loginForm.get('email');
    email?.setValue('texto-que-no-es-un-email');
    expect(email?.valid).toBeFalsy();
  });

  it('el formulario debe ser válido cuando los campos están bien llenados', () => {
    const email = component.loginForm.get('email');
    const password = component.loginForm.get('password');
    
    email?.setValue('test@correo.com');
    password?.setValue('unaClaveSegura123');
    
    expect(component.loginForm.valid).toBeTruthy();
  });

  // --- PRUEBA AVANZADA DE COMPORTAMIENTO ---
  it('debe marcar todos los campos como "tocados" si el formulario es inválido al enviarse', () => {
    // Llama al método onSubmit() sin llenar el formulario
    component.onSubmit();
    
    // Verificamos que los campos ahora estén marcados como "touched"
    // para que se muestren los mensajes de error en la interfaz.
    expect(component.email?.touched).toBe(true);
    expect(component.password?.touched).toBe(true);
  });
});