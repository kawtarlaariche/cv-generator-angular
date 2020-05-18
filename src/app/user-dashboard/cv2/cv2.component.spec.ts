import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cv2Component } from './cv2.component';

describe('Cv2Component', () => {
  let component: Cv2Component;
  let fixture: ComponentFixture<Cv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
