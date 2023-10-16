import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosotrosSeccionComponent } from './sobre-nosotros-seccion.component';

describe('SobreNosotrosSeccionComponent', () => {
  let component: SobreNosotrosSeccionComponent;
  let fixture: ComponentFixture<SobreNosotrosSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreNosotrosSeccionComponent]
    });
    fixture = TestBed.createComponent(SobreNosotrosSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
