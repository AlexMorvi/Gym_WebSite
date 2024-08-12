import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEntrenamientosComponent } from './consultar-entrenamientos.component';

describe('ConsultarEntrenamientosComponent', () => {
  let component: ConsultarEntrenamientosComponent;
  let fixture: ComponentFixture<ConsultarEntrenamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarEntrenamientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarEntrenamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
