import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEsComponent } from './blog-es.component';

describe('BlogEsComponent', () => {
  let component: BlogEsComponent;
  let fixture: ComponentFixture<BlogEsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogEsComponent]
    });
    fixture = TestBed.createComponent(BlogEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
