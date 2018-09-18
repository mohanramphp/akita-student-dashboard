import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { GridComponent } from './dashboard/grid/grid.component';
import { FormComponent } from './dashboard/form/form.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavBarComponent,
    ChartComponent,
    GridComponent,
    FormComponent
  ],
  imports: [
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChartModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
