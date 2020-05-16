import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '@app/models';


const apiUrl = environment.baseApi;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {

  constructor(private http: HttpClient) { }
 
  updateUser(id:Number,user: User):Observable<any>{
    return this.http.put(apiUrl + '/user/' +id, user,httpOptions).pipe(
      catchError(this.errorHandler));
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
