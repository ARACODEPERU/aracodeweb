import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoGrandeSeccionComponent } from './contacto-grande-seccion.component';

describe('ContactoGrandeSeccionComponent', () => {
  let component: ContactoGrandeSeccionComponent;
  let fixture: ComponentFixture<ContactoGrandeSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoGrandeSeccionComponent]
    });
    fixture = TestBed.createComponent(ContactoGrandeSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
