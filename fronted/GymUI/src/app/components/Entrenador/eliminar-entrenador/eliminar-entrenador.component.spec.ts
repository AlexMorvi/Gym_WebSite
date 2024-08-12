import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEntrenadorComponent } from './eliminar-entrenador.component';

describe('EliminarEntrenadorComponent', () => {
  let component: EliminarEntrenadorComponent;
  let fixture: ComponentFixture<EliminarEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarEntrenadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
