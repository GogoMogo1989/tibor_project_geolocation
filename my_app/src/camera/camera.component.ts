import { Component, ViewChild, ElementRef } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {
  @ViewChild('webcam') webcamElement!: ElementRef;
  public webcamImagesArray: string[] = [];
  public webcamImage: string | undefined;
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
    this.webcamImage = event.imageAsDataUrl;
    console.log(this.webcamImage);
    this.webcamImagesArray.push(event.imageAsDataUrl);
    console.log(this.webcamImagesArray);
  }
}
