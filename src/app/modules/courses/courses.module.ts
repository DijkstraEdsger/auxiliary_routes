import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { MainCoursesComponent } from './main-courses/main-courses.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { SideNavCategoriesComponent } from './side-nav-categories/side-nav-categories.component';


@NgModule({
  declarations: [MainCoursesComponent, CourseCategoryComponent, SideNavCategoriesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
