import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SampleFormComponent } from "./components/sample-form/sample-form.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'sample-form', component: SampleFormComponent},
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
