import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebcamImagesServices {
  private apiUrl = 'http://localhost:3000/api/webcamimagesupload'; // Az API végpont URL-je

  constructor(private http: HttpClient) { }

  // Helyadatok küldése az adatbázisba
  sendImage(imageAsDataUrl: String): Observable<any> {
    const body = {imageAsDataUrl}; // A képtadatokat tartalmazó test
    return this.http.post<any>(this.apiUrl, body); // HTTP POST kérés elküldése
  }
}