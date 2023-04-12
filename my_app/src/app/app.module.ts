import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GeolocationComponent } from 'src/geolocation/geolocation.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GeolocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
