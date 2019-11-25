import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Holiday } from './Models/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  
  private holydayUrl = 'https://calendarific.com/api/v2/holidays';


  //Enter a valid api_key here, this one is invalid
  /* private api_key = "baa9dc110aa712sd3a9fa2a3dwb6c01d4c875950dc32vs"; */
  private country = "hr";

  constructor(private http: HttpClient) { }

  getNextHolyday (year: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(this.holydayUrl + "?api_key="
     + this.api_key + "&country=" + this.country + "&year=" + year)
    .pipe(
      map(data => data["response"].holidays),
      catchError(this.handleError<Holiday[]>('getHolydays', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
