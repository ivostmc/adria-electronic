import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Measurement } from './air-quality-measurement';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {

  private airQualityUrl = 'https://api.openaq.org/v1/latest';

  constructor(private http: HttpClient) { }

  getAirQuality (city: string): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(this.airQualityUrl + `?city=${city}`)
    .pipe(
      map(data => data["results"][0].measurements),
      catchError(this.handleError<Measurement[]>('getAirQuality', []))
    )
    
  }
  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
