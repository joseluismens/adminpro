import { NgModule } from '@angular/core';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import {  RouterModule, Routes } from '@angular/router';

const childRoutes : Routes = [
  {path:'',component:DashboardComponent,data:{titulo:'Dashboard'}},
  {path:'progress', component:ProgressComponent,data:{titulo:'Barra de Progreso'}},
  {path:'grafica1',component:Grafica1Component,data:{titulo:'Grafica Circular'}},
];
@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports:[RouterModule]
})
export class ChildRoutesModule { }
