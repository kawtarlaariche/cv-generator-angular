import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cv1Component } from './cv1.component';

describe('Cv1Component', () => {
  let component: Cv1Component;
  let fixture: ComponentFixture<Cv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
