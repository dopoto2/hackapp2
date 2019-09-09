import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SampleFormComponent } from './components/sample-form/sample-form.component';
import { PredictedSettingsPageComponent } from './components/predicted-settings-page/predicted-settings-page.component';
import { PredictionFormComponent } from './components/prediction-form/prediction-form.component';

const routes: Routes = [
  { path: 'predicted-settings', component: PredictedSettingsPageComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sample-form', component: SampleFormComponent },
  { path: 'prediction-form', component: PredictionFormComponent},
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
export class AppRoutingModule {}
