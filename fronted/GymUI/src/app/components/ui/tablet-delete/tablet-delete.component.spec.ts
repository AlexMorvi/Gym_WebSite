import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletDeleteComponent } from './tablet-delete.component';

describe('TabletDeleteComponent', () => {
  let component: TabletDeleteComponent;
  let fixture: ComponentFixture<TabletDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabletDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabletDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
