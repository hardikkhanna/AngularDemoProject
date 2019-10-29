import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assingnment2Component } from './assingnment2.component';

describe('Assingnment2Component', () => {
  let component: Assingnment2Component;
  let fixture: ComponentFixture<Assingnment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assingnment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assingnment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
