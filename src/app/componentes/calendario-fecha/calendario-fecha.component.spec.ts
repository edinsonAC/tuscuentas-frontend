import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioFechaComponent } from './calendario-fecha.component';

describe('CalendarioFechaComponent', () => {
  let component: CalendarioFechaComponent;
  let fixture: ComponentFixture<CalendarioFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
