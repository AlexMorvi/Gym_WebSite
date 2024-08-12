import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarMembresiaComponent } from './gestionar-membresia.component';

describe('GestionarMembresiaComponent', () => {
  let component: GestionarMembresiaComponent;
  let fixture: ComponentFixture<GestionarMembresiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarMembresiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionarMembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
