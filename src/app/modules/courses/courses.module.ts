import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { SideNavCategoriesComponent } from './side-nav-categories/side-nav-categories.component';
import { BreadcrumbCoursesComponent } from './breadcrumb-courses/breadcrumb-courses.component';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';


@NgModule({
  declarations: [CoursesComponent, CourseCardsComponent, SideNavCategoriesComponent, BreadcrumbCoursesComponent, CoursesCategoryComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
