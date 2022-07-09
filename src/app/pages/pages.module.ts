import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
      DashboardComponent,
      ProgressComponent,
      Grafica1Component,
      PagesComponent
    ],
    imports: [
      CommonModule,
      BrowserModule,
      SharedModule,
      RouterModule
    ],
    providers: [],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        PagesComponent
    ]
   
  })

  export class PageModule { }