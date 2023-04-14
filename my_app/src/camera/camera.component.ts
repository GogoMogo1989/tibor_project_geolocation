import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { WebcamImagesServices } from 'src/services/webcamImagesServices';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  public videoOptions: any = {}; // videoOptions objektum a kamera beállításainak tárolására
  public triggerObservable: Subject<void> = new Subject<void>();

  constructor(private webcamImagesServices: WebcamImagesServices){}

  ngOnInit(): void {
    // Rendelkezésre álló médiaeszközök lekérdezése
    navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        // Frontoldali kamera keresése
        const frontCamera = devices.find(device => device.label.toLowerCase().includes('front'));
        if (frontCamera) {
          this.videoOptions.deviceId = { exact: frontCamera.deviceId };
        } else {
          console.error('Front camera not found.');
        }
      })
      .catch(error => {
        console.error('Error enumerating media devices:', error);
      });
  }

  // Kamerák közötti váltás
  public switchCamera(): void {
    if (this.videoOptions.deviceId.exact === 'front') {
      this.videoOptions.deviceId.exact = 'rear';
    } else {
      this.videoOptions.deviceId.exact = 'front';
    }
  }

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
    this.webcamImagesServices.sendImage(event.imageAsDataUrl).subscribe(
      (response) => {
        console.log('Kép sikeresen elküldve az adatbázisba!', response);
        alert('Kép sikeresen mentve!');
      },
      (error) => {
        console.error('Hiba a kép elküldése során:', error);
      }
    );
  }
}