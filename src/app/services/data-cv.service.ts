import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, Education, Experience, Project, Language, Hobby } from '@app/models';

const apiUrl = environment.baseApi;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataCvService {

  constructor(private http: HttpClient) { }

  getUser(id:number) : Observable<User> {
    return this.http.get(apiUrl+'/user/'+id, httpOptions).pipe(
     map(res => res as User),
     catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client-side error

    } else {
      // server-side error


    }
    return throwError(error);
  }
}
