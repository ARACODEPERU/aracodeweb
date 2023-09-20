import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoPrincipalSeccionComponent } from './encabezado-principal-seccion.component';

describe('EncabezadoPrincipalSeccionComponent', () => {
  let component: EncabezadoPrincipalSeccionComponent;
  let fixture: ComponentFixture<EncabezadoPrincipalSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoPrincipalSeccionComponent]
    });
    fixture = TestBed.createComponent(EncabezadoPrincipalSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
