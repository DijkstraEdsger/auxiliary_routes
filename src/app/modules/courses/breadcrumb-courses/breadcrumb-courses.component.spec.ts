import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbCoursesComponent } from './breadcrumb-courses.component';

describe('BreadcrumbCoursesComponent', () => {
  let component: BreadcrumbCoursesComponent;
  let fixture: ComponentFixture<BreadcrumbCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
