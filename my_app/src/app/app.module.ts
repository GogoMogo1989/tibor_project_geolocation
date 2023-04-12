import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GeolocationComponent } from 'src/geolocation/geolocation.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GeolocationViewComponent } from 'src/geolocation-view/geolocation-view.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GeolocationComponent,
    GeolocationViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
