import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCoursesComponent } from './main-courses/main-courses.component';

const routes: Routes = [
  {
    path: '',
    component: MainCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
