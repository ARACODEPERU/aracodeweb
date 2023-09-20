import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoSecundarioSeccionComponent } from './encabezado-secundario-seccion.component';

describe('EncabezadoSecundarioSeccionComponent', () => {
  let component: EncabezadoSecundarioSeccionComponent;
  let fixture: ComponentFixture<EncabezadoSecundarioSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoSecundarioSeccionComponent]
    });
    fixture = TestBed.createComponent(EncabezadoSecundarioSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
