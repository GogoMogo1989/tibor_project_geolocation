import { Component} from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {

  public webcamImagesArray: string[] = [];
  public triggerObservable: Subject<void> = new Subject<void>();

  // Webkamera képének rögzítése és átméretezése
  public webcamImageCapture(): void {
    this.triggerObservable.next();
  }

  // Webkamera inicializálási hiba kezelése
  public handleInitError(error: WebcamInitError): void {
    console.error('Webcam initialization error:', error);
  }

  // imageCapture esemény kezelése
  public handleImageCapture(event: WebcamImage): void {
    this.webcamImagesArray.push(event.imageAsDataUrl);
    console.log(this.webcamImagesArray);
  }
}
