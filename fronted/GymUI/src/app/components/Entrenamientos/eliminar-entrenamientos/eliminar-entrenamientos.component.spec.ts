import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEntrenamientosComponent } from './eliminar-entrenamientos.component';

describe('EliminarEntrenamientosComponent', () => {
  let component: EliminarEntrenamientosComponent;
  let fixture: ComponentFixture<EliminarEntrenamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarEntrenamientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarEntrenamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
