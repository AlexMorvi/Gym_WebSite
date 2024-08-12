import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEntrenamientosComponent } from './gestionar-entrenamientos.component';

describe('GestionarEntrenamientosComponent', () => {
  let component: GestionarEntrenamientosComponent;
  let fixture: ComponentFixture<GestionarEntrenamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarEntrenamientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionarEntrenamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
