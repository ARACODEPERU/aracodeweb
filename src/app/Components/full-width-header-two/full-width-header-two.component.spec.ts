import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthHeaderTwoComponent } from './full-width-header-two.component';

describe('FullWidthHeaderTwoComponent', () => {
  let component: FullWidthHeaderTwoComponent;
  let fixture: ComponentFixture<FullWidthHeaderTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullWidthHeaderTwoComponent]
    });
    fixture = TestBed.createComponent(FullWidthHeaderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
