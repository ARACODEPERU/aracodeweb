import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoChicoSeccionComponent } from './contacto-chico-seccion.component';

describe('ContactoChicoSeccionComponent', () => {
  let component: ContactoChicoSeccionComponent;
  let fixture: ComponentFixture<ContactoChicoSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoChicoSeccionComponent]
    });
    fixture = TestBed.createComponent(ContactoChicoSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
