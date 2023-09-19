import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFastSectionComponent } from './contact-fast-section.component';

describe('ContactFastSectionComponent', () => {
  let component: ContactFastSectionComponent;
  let fixture: ComponentFixture<ContactFastSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFastSectionComponent]
    });
    fixture = TestBed.createComponent(ContactFastSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
