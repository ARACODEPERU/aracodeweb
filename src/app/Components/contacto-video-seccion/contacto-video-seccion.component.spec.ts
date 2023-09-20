import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoVideoSeccionComponent } from './contacto-video-seccion.component';

describe('ContactoVideoSeccionComponent', () => {
  let component: ContactoVideoSeccionComponent;
  let fixture: ComponentFixture<ContactoVideoSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoVideoSeccionComponent]
    });
    fixture = TestBed.createComponent(ContactoVideoSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
