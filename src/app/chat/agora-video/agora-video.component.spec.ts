import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgoraVideoComponent } from './agora-video.component';

describe('AgoraVideoComponent', () => {
  let component: AgoraVideoComponent;
  let fixture: ComponentFixture<AgoraVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgoraVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgoraVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
