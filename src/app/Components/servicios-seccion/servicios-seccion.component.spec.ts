import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSeccionComponent } from './servicios-seccion.component';

describe('ServiciosSeccionComponent', () => {
  let component: ServiciosSeccionComponent;
  let fixture: ComponentFixture<ServiciosSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosSeccionComponent]
    });
    fixture = TestBed.createComponent(ServiciosSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
