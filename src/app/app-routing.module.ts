import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseCardsComponent } from './components/course-cards/course-cards.component';
import { CoursesCategoryComponent } from './components/courses-category/courses-category.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'courses',
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
        component: SideMenuComponent
      },
      {
        path: ':id',
        outlet: 'sidemenu',
        component: SideMenuComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
