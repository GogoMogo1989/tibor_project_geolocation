import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeolocationComponent } from 'src/geolocation/geolocation.component';
import { GeolocationViewComponent } from 'src/geolocation-view/geolocation-view.component';
import { CameraComponent } from 'src/camera/camera.component';
import { CameraViewComponent } from 'src/camera-view/camera-view.component';

const routes: Routes = [
  {path:"geolocation", component: GeolocationComponent},
  {path:"geolocation-view", component: GeolocationViewComponent},
  {path:"camera", component: CameraComponent},
  {path:"camera-view", component: CameraViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
