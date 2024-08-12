import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellFormatedComponent } from './cell-formated.component';

describe('CellFormatedComponent', () => {
  let component: CellFormatedComponent;
  let fixture: ComponentFixture<CellFormatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellFormatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CellFormatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
