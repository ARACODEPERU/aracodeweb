import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthHeaderComponent } from './full-width-header.component';

describe('FullWidthHeaderComponent', () => {
  let component: FullWidthHeaderComponent;
  let fixture: ComponentFixture<FullWidthHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullWidthHeaderComponent]
    });
    fixture = TestBed.createComponent(FullWidthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
