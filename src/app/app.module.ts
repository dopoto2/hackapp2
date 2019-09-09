import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPopper } from 'angular-popper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViggoPanelComponent } from './components/viggo-panel/viggo-panel.component';
import { SampleFormComponent } from './components/sample-form/sample-form.component';
import { PredictedSettingsPageComponent } from './components/predicted-settings-page/predicted-settings-page.component';
import { PredictionFormComponent } from './components/prediction-form/prediction-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ViggoPanelComponent,
    SampleFormComponent,
    PredictedSettingsPageComponent,
    PredictionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
