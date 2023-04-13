import { Component} from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { WebcamImagesServices } from 'src/services/webcamImagesServices';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {

  constructor(private webcamImagesServices: WebcamImagesServices){}

  public triggerObservable: Subject<void> = new Subject<void>();

  // Webkamera képének rögzítése
  public webcamImageCapture(): void {
    this.triggerObservable.next();
  }

  // Webkamera inicializálási hiba kezelése
  public handleInitError(error: WebcamInitError): void {
    console.error('Webkamera iniciálása közben hiba lépett fel:', error);
  }

  // imageCapture esemény kezelése
  public handleImageCapture(event: WebcamImage): void {
      this.webcamImagesServices.sendImage(event.imageAsDataUrl).subscribe( // Képadatok elküldése az adatbázisba
      (response) => {
        console.log('Kép sikeresen elküldve az adatbázisba!', response);
        alert('Kép sikeresen mentve!')
      },
      (error) => {
        console.error('Hiba a kép elküldése során:', error);
      }
    );
  }
}
