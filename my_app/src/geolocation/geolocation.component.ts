import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  latitude!: number;
  longitude!: number;

  constructor() {}

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