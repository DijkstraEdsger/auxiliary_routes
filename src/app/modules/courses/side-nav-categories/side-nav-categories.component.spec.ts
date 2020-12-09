import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavCategoriesComponent } from './side-nav-categories.component';

describe('SideNavCategoriesComponent', () => {
  let component: SideNavCategoriesComponent;
  let fixture: ComponentFixture<SideNavCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
