import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PageModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PageModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
