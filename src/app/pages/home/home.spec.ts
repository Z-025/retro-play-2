import { ComponentFixture, TestBed } from '@angular/core/testing';
// 1. Importa el módulo para pruebas HTTP
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 2. Añade HttpClientTestingModule a los imports
      imports: [Home, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});