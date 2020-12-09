import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';
import { CoursesComponent } from './courses/courses.component';
import { SideNavCategoriesComponent } from './side-nav-categories/side-nav-categories.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CourseCardsComponent
      },
      {
        path: ':id',
        component: CoursesCategoryComponent
      },
      {
        path: '',
        outlet: 'sidemenu',
        component: SideNavCategoriesComponent
      },
      {
        path: ':id',
        outlet: 'sidemenu',
        component: SideNavCategoriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
