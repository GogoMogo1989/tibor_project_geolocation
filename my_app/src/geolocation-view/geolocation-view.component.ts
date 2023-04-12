import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-geolocation-view',
  templateUrl: './geolocation-view.component.html',
  styleUrls: ['./geolocation-view.component.css'],
})
export class GeolocationViewComponent implements OnInit {

  geolocationData: any [] =[];

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.getData()
  }

  getData() {
    this.http.get<any[]>('http://localhost:3000/api/geolocation/data').subscribe(
      (data) => {
        this.geolocationData = data
      },
      (error) => {
        console.log("Hiba az adatok lekérdezésekor" ,error)
      }
    )
  }
}
