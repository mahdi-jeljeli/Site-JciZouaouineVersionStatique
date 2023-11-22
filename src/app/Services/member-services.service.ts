import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


import { environment } from 'src/environments/environment';
import { EmailRequest } from '../Models/EmailRequest';

const _url: string = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class MemberServicesService {

  private apiUrl = _url;
  constructor(private http: HttpClient) { }

  EmailRequestForJoinUs(_EmailRequest : EmailRequest): Observable<any> {
    return this.http.post<EmailRequest>(`${this.apiUrl}/api/JoinUS/send`,_EmailRequest)
}
}
