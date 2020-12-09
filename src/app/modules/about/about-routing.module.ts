import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAboutComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
