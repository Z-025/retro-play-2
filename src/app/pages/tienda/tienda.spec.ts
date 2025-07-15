import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Tienda } from './tienda';

describe('Tienda', () => {
  let component: Tienda;
  let fixture: ComponentFixture<Tienda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [Tienda, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tienda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});