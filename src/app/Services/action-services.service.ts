import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const _url: string = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class ActionServicesService {

  private apiUrl = _url;
  constructor(private http: HttpClient) { }

  getAllAcition(): Observable<any> {
    const url = `${this.apiUrl}/api/Action/GetActions`;

    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Error getting tache data:', error);
        return throwError(error);
      })
    );
  }
  getAllPhotoForAcition(id : number  | undefined): Observable<any> {
    const url = `${this.apiUrl}/api/Photos/GetPhotos/${id}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Error getting tache data:', error);
        return throwError(error);
      })
    );
  }
  
  getOneAcition(id : number): Observable<any> {
    const url = `${this.apiUrl}/api/Action/GetAction/${id}`;

    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Error getting tache data:', error);
        return throwError(error);
      })
    );
  }


  
  //ERROR HANDLE
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
