import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEntrenadorComponent } from './consultar-entrenador.component';

describe('ConsultarEntrenadorComponent', () => {
  let component: ConsultarEntrenadorComponent;
  let fixture: ComponentFixture<ConsultarEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarEntrenadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
