import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniosSeccionComponent } from './testimonios-seccion.component';

describe('TestimoniosSeccionComponent', () => {
  let component: TestimoniosSeccionComponent;
  let fixture: ComponentFixture<TestimoniosSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimoniosSeccionComponent]
    });
    fixture = TestBed.createComponent(TestimoniosSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
