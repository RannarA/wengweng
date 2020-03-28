import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPyramidComponent } from './card-pyramid.component';

describe('CardPyramidComponent', () => {
  let component: CardPyramidComponent;
  let fixture: ComponentFixture<CardPyramidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPyramidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPyramidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
