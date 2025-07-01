import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Login } from './login';

describe('Login Component', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Login, ReactiveFormsModule ]
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
});