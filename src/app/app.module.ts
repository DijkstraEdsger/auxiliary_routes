import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BreadcrumbComponent } from './components/shared/breadcrumb/breadcrumb.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseCardsComponent } from './components/course-cards/course-cards.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CoursesCategoryComponent } from './components/courses-category/courses-category.component';
import { LoadSpinnerComponent } from './components/common/load-spinner/load-spinner.component';
import { LoadSpinnerTwoComponent } from './components/common/load-spinner-two/load-spinner-two.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    CoursesComponent,
    CourseCardsComponent,
    SideMenuComponent,
    CoursesCategoryComponent,
    LoadSpinnerComponent,
    LoadSpinnerTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
