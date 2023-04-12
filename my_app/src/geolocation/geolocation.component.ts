import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/services/geolocationServices';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  latitude!: number;
  longitude!: number;

  constructor(private geolocationService : GeolocationService) {}

  ngOnInit(): void {
    this.getLocation();
      setInterval(() => { //Betöltődés 60 másodpercenként frissül, és hívódik meg a getLocation
        this.getLocation();
        console.log("Frissült a lekérdezés!")
      }, 60000); 
  }

  getLocation() {
    if (navigator.geolocation) {  //ha engedélyezzük a böngészőben a geolocation használatát, akkor:
      navigator.geolocation.getCurrentPosition( //Aktuális helyzet lekérdezése
        (position) => {
          this.latitude = position.coords.latitude; //ha sikerült a lekrédezés, akkor lementjük a vátozókba a kordinátákat
          this.longitude = position.coords.longitude;
          this.geolocationService.sendLocation(this.latitude, this.longitude).subscribe( // Helyadatok elküldése az adatbázisba
            (response) => {
              console.log('Helyzetadatok sikeresen elküldve az adatbázisba!', response);
            },
            (error) => {
              console.error('Hiba a helyzetadatok elküldése során:', error);
            }
          );
        },
        (error) => {
          console.error('Hiba a helyzet lekérdezése során:', error);
        }
      );
    } else { //ha nem engedélyezzük, akkor meg ez:
      console.error('A böngésző nem támogatja a helyzet lekérdezését.');
    }
  }
}