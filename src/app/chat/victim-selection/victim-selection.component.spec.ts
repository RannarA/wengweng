import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimSelectionComponent } from './victim-selection.component';

describe('VictimSelectionComponent', () => {
  let component: VictimSelectionComponent;
  let fixture: ComponentFixture<VictimSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictimSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
