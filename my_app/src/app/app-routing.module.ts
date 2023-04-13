import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeolocationComponent } from 'src/geolocation/geolocation.component';
import { GeolocationViewComponent } from 'src/geolocation-view/geolocation-view.component';
import { CameraComponent } from 'src/camera/camera.component';

const routes: Routes = [
  {path:"geolocation", component: GeolocationComponent},
  {path:"geolocation-view", component: GeolocationViewComponent},
  {path:"camera", component: CameraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
