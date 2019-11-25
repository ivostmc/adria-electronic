import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Room } from './Models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private roomsUrl = 'http://ae.hr/rooms_status.php';

  constructor(private http: HttpClient) { }

  getRooms (): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl)
    .pipe(
      map(data => data["controllers"]),
      catchError(this.handleError<Room[]>('getRooms', []))
    )
    ;
  }
  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
