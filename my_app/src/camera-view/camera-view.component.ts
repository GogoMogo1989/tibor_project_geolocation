import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-camera-view',
  templateUrl: './camera-view.component.html',
  styleUrls: ['./camera-view.component.css'],
})
export class CameraViewComponent implements OnInit {

  imagesData: any [] =[];

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.getData()
  }

  getData() {
    this.http.get<any[]>('http://localhost:3000/api/webcamimagesupload/data').subscribe(
      (data) => {
        this.imagesData = data
      },
      (error) => {
        console.log("Hiba az képek lekérdezésekor" ,error)
      }
    )
  }
}
