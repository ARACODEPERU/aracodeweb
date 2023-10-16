import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirnosSeccionComponent } from './elegirnos-seccion.component';

describe('ElegirnosSeccionComponent', () => {
  let component: ElegirnosSeccionComponent;
  let fixture: ComponentFixture<ElegirnosSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElegirnosSeccionComponent]
    });
    fixture = TestBed.createComponent(ElegirnosSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
