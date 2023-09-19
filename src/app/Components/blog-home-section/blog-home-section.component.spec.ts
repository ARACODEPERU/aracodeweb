import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomeSectionComponent } from './blog-home-section.component';

describe('BlogHomeSectionComponent', () => {
  let component: BlogHomeSectionComponent;
  let fixture: ComponentFixture<BlogHomeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogHomeSectionComponent]
    });
    fixture = TestBed.createComponent(BlogHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
