import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePaginaSeccionComponent } from './pie-pagina-seccion.component';

describe('PiePaginaSeccionComponent', () => {
  let component: PiePaginaSeccionComponent;
  let fixture: ComponentFixture<PiePaginaSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiePaginaSeccionComponent]
    });
    fixture = TestBed.createComponent(PiePaginaSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
