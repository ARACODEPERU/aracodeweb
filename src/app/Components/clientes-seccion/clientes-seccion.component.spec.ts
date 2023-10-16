import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesSeccionComponent } from './clientes-seccion.component';

describe('ClientesSeccionComponent', () => {
  let component: ClientesSeccionComponent;
  let fixture: ComponentFixture<ClientesSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesSeccionComponent]
    });
    fixture = TestBed.createComponent(ClientesSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
