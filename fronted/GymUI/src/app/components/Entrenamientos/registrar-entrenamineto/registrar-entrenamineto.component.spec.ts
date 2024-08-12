import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEntrenaminetoComponent } from './registrar-entrenamineto.component';

describe('RegistrarEntrenaminetoComponent', () => {
  let component: RegistrarEntrenaminetoComponent;
  let fixture: ComponentFixture<RegistrarEntrenaminetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarEntrenaminetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarEntrenaminetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
