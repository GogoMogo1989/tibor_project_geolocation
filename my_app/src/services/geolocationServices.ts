import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private apiUrl = 'http://localhost:3000/api/geolocation/:params'; // Az API végpont URL-je

  constructor(private http: HttpClient) { }

  // Helyzetadatok küldése az adatbázisba
  sendLocation(latitude: number, longitude: number): Observable<any> {
    const body = { latitude, longitude}; // A helyzetadatokat tartalmazó test
    return this.http.post<any>(this.apiUrl, body); // HTTP POST kérés elküldése
  }
}